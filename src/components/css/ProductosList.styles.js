export const styles = {
  appContainer: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#f8f9fa',
    fontFamily: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  
  // Header styles
  header: {
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    padding: '0 2rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    width: '100%'
  },
  
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontWeight: '600',
    fontSize: '1.3rem',
    cursor: 'pointer',
    color: '#ffffff'
  },
  
  nav: {
    display: 'flex',
    gap: '2rem',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
  
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    padding: '0.75rem 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    '&:hover': {
      borderBottomColor: '#3498db',
      color: '#3498db'
    }
  },
  
  navItemActive: {
    borderBottomColor: '#3498db',
    color: '#3498db',
    fontWeight: '600'
  },
  
  mobileMenuButton: {
    display: 'none',
    padding: '0.75rem',
    color: '#ffffff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.3rem',
    '@media (max-width: 768px)': {
      display: 'block'
    }
  },
  
  mobileMenu: {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    backgroundColor: '#2c3e50',
    zIndex: 99,
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  
  mobileMenuItem: {
    padding: '0.8rem 1rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      paddingLeft: '1.2rem'
    }
  },
  
  // Main content styles
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
    width: '100%',
    boxSizing: 'border-box'
  },
  
  pageHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2.5rem',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  
  pageTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    fontWeight: '700',
    margin: 0,
    lineHeight: 1.2
  },
  
  searchContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '450px',
    minWidth: '280px'
  },
  
  searchInput: {
    width: '100%',
    padding: '0.9rem 1.2rem 0.9rem 3.2rem',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    '&:focus': {
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)',
      outline: 'none'
    }
  },
  
  searchIcon: {
    position: 'absolute',
    left: '1.2rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#7f8c8d',
    fontSize: '1.1rem'
  },
  
  // Filters and sorting
 filtersSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
    width: '100%'
  },

  filtersRow: {
    display: 'flex',
    flexWrap: 'nowrap', // Evita que se envuelvan a nueva línea
    gap: '0.8rem',
    alignItems: 'center',
    overflowX: 'auto', // Permite scroll horizontal si no caben
    paddingBottom: '0.5rem', // Espacio para scroll
    '&::-webkit-scrollbar': {
      height: '4px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#3498db',
      borderRadius: '4px'
    },
    '@media (max-width: 768px)': {
      gap: '0.6rem' // Espacio más pequeño en móvil
    }
  },
  
  sectionTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#2c3e50',
    margin: '0 0 0.5rem 0'
  },
  
  filterButton: {
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#ecf0f1',
    color: '#2c3e50',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    fontWeight: '500',
    display: 'inline-flex', // Cambiado a inline-flex para mejor ajuste
    alignItems: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap',
    flexShrink: 0, // Evita que se reduzcan
    '&:hover': {
      backgroundColor: '#d5dbdb',
      transform: 'translateY(-1px)'
    },
    '&.active': {
      backgroundColor: '#3498db',
      color: 'white',
      boxShadow: '0 2px 5px rgba(52, 152, 219, 0.3)'
    }
  },

  
  sortButton: {
    padding: '0.7rem 1.2rem',
    borderRadius: '6px',
    border: '1px solid #e0e0e0',
    backgroundColor: 'white',
    color: '#2c3e50',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      transform: 'translateY(-1px)'
    },
    '&.active': {
      backgroundColor: '#3498db',
      color: 'white',
      borderColor: '#3498db',
      boxShadow: '0 2px 5px rgba(52, 152, 219, 0.3)'
    }
  },
  
  // Products grid
  productsContainer: {
    width: '100%'
  },
  
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.8rem',
    width: '100%',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr'
    }
  },
  
  productCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
    }
  },
  
  productImageContainer: {
    height: '200px',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  
  productBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '0.3rem 0.8rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem'
  },
  
  productContent: {
    padding: '1.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  
  productName: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 1rem 0',
    lineHeight: 1.3
  },
  
  productDescription: {
    fontSize: '0.95rem',
    color: '#7f8c8d',
    margin: '0 0 1.2rem 0',
    lineHeight: 1.5,
    flex: 1
  },
  
  productFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto'
  },
  
  productPrice: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#27ae60'
  },
  
  productStock: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    '&.low-stock': {
      color: '#e74c3c'
    },
    '&.in-stock': {
      color: '#27ae60'
    }
  },
  
  // Empty state
  emptyState: {
    gridColumn: '1/-1',
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    margin: '2rem 0'
  },
  
  emptyStateTitle: {
    fontSize: '1.5rem',
    color: '#2c3e50',
    marginBottom: '1rem'
  },
  
  emptyStateText: {
    fontSize: '1rem',
    color: '#7f8c8d',
    marginBottom: '1.5rem'
  },
  
  // Loading state
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    width: '100%'
  },
  
  // Error state
  errorContainer: {
    gridColumn: '1/-1',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#fddede',
    borderRadius: '10px',
    color: '#e74c3c',
    margin: '2rem 0'
  }
};

export const mediaQueries = {
  small: '@media (max-width: 768px)',
  medium: '@media (min-width: 769px) and (max-width: 1024px)',
  large: '@media (min-width: 1025px)',
};