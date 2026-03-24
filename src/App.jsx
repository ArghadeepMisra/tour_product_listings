import ProductList from './components/ProductList'

export default function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Products</h1>
      <ProductList />
    </div>
  )
}

const styles = {
  page: {
    padding: '2rem 1rem',
    maxWidth: '700px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.75rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
}
