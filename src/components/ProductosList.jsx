import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductos } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBox, faSearch, faHome, 
  faShoppingCart, faTags, faBottleWater, faSignOutAlt,
  faCandyCane, faBars
} from '@fortawesome/free-solid-svg-icons';
import { styles } from './css/ProductosList.styles';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

function ProductosList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'nombre', direction: 'asc' });
  const [activeCategory, setActiveCategory] = useState('todos');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getProductos()
      .then(res => {
        setProductos(res.data);
        setError(null);
      })
      .catch(err => {
        console.error('Error cargando productos:', err);
        setError('Hubo un problema al cargar los productos.');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedProductos = [...productos].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredProductos = sortedProductos.filter(producto => {
    const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         producto.descripcion?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'todos' || 
                          (producto.categoria && producto.categoria.toLowerCase() === activeCategory);
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'todos', name: 'Todos', icon: faBox },
    { id: 'bebidas', name: 'Bebidas', icon: faBottleWater },
    { id: 'snacks', name: 'Snacks', icon: faHamburger },
    { id: 'dulces', name: 'Dulces', icon: faCandyCane },
  ];

const navItems = [
  { id: 'inicio', name: 'Inicio', icon: faHome },
  { id: 'productos', name: 'Productos', icon: faTags },
  { id: 'ventas', name: 'Ventas', icon: faShoppingCart },
  { id: 'logout', name: 'Cerrar sesión', icon: faSignOutAlt }, 
];

  if (loading) return (
    <div style={styles.appContainer}>
      <div style={{ ...styles.container, textAlign: 'center', padding: '2rem' }}>
        <p>Cargando productos...</p>
      </div>
    </div>
  );

  if (error) return (
    <div style={styles.appContainer}>
      <div style={{ ...styles.container, textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    </div>
  );

  return (
    <div style={styles.appContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo} onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>ExpendedoraPro</span>
        </div>

        {/* Menú móvil */}
        <button 
          style={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menú principal */}
        <nav style={styles.nav}>
          {navItems.map(item => (
          <button
  key={item.id}
  style={{ ...styles.navItem, background: 'none', border: 'none', padding: 0 }}
  onClick={() => navigate(`/${item.id}`)}
>
  <FontAwesomeIcon icon={item.icon} />
  <span>{item.name}</span>
</button>
          ))}
        </nav>
      </header>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          {navItems.map(item => (
  <button
    key={item.id}
    style={{ ...styles.mobileMenuItem, background: 'none', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer' }}
    onClick={() => {
      navigate(`/${item.id}`);
      setMobileMenuOpen(false);
    }}
  >
    <FontAwesomeIcon icon={item.icon} />
    <span>{item.name}</span>
  </button>
))}
        </div>
      )}

      {/* Contenido principal */}
      <main style={styles.container}>
        <div style={styles.contentHeader}>
          <h1 style={styles.title}>Catálogo de Productos</h1>
          <div style={styles.searchContainer}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>

        {/* Filtros por categoría */}
        <div style={styles.filtersContainer}>
          {categories.map(category => (
            <button
              key={category.id}
              style={{
                ...styles.filterButton,
                ...(activeCategory === category.id && { backgroundColor: '#3498db', color: 'white' })
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              <FontAwesomeIcon icon={category.icon} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Ordenamiento */}
        <div style={styles.sortButtons}>
          <button
            style={{
              ...styles.sortButton,
              ...(sortConfig.key === 'nombre' && { backgroundColor: '#3498db', color: 'white', borderColor: '#3498db' })
            }}
            onClick={() => handleSort('nombre')}
          >
            Nombre {sortConfig.key === 'nombre' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
          </button>
          <button
            style={{
              ...styles.sortButton,
              ...(sortConfig.key === 'cantidad' && { backgroundColor: '#3498db', color: 'white', borderColor: '#3498db' })
            }}
            onClick={() => handleSort('cantidad')}
          >
            Cantidad {sortConfig.key === 'cantidad' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
          </button>
          <button
            style={{
              ...styles.sortButton,
              ...(sortConfig.key === 'precio' && { backgroundColor: '#3498db', color: 'white', borderColor: '#3498db' })
            }}
            onClick={() => handleSort('precio')}
          >
            Precio {sortConfig.key === 'precio' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
          </button>
        </div>

        {/* Lista de productos */}
        <div style={styles.productGrid}>
          {filteredProductos.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem' }}>
              {searchTerm 
                ? 'No se encontraron productos que coincidan con tu búsqueda.' 
                : 'No hay productos disponibles en esta categoría.'}
            </div>
          ) : (
            filteredProductos.map(producto => (
              <div key={producto.id} style={styles.productCard}>
                <div style={styles.productImageContainer}>
                  {producto.imagen ? (
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre} 
                      style={styles.productImage} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23ddd"><rect width="100" height="100"/><text x="50%" y="50%" font-family="Arial" font-size="10" fill="%237f8c8d" text-anchor="middle" dominant-baseline="middle">Imagen no disponible</text></svg>';
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faBox} size="3x" color="#ccc" />
                  )}
                </div>
                <div style={styles.productContent}>
                  <h3 style={styles.productName}>{producto.nombre}</h3>
                  <div style={styles.productDetails}>
                    <span style={styles.productPrice}>${producto.precio?.toFixed(2) || '0.00'}</span>
                    <span style={styles.productStock}>{producto.cantidad} disponibles</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default ProductosList;