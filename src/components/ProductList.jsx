import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getDocs(query(collection(db, 'products'), where('status', '==', 'In Tour')))
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p style={styles.status}>Loading products...</p>
  if (error) return <p style={{ ...styles.status, color: '#c00' }}>Error: {error}</p>
  if (products.length === 0) return <p style={styles.status}>No products found.</p>

  return (
    <ul style={styles.list}>
      {products.map((product) => (
        <li key={product.id} style={styles.item}>
          {product.name}
        </li>
      ))}
    </ul>
  )
}

const styles = {
  status: {
    textAlign: 'center',
    marginTop: '2rem',
    color: '#555',
  },
  list: {
    listStyle: 'none',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  item: {
    background: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1rem 1.25rem',
    fontSize: '1rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  },
}
