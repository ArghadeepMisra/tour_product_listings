import ProductList from './components/ProductList'

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.badge}>🎧 ON TOUR</div>
        <h1 style={styles.heading}>Audio Geeks</h1>
        <p style={styles.subheading}>Brotherhood of Audiophiles</p>
        <div style={styles.divider}>⚡ ⚡ ⚡</div>
      </header>
      <ProductList />
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    padding: '2rem 1rem',
    maxWidth: '700px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '2.5rem',
    padding: '2rem 1.5rem',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(255, 0, 128, 0.2), 0 0 0 1px rgba(255,255,255,0.05)',
    position: 'relative',
    overflow: 'hidden',
  },
  badge: {
    display: 'inline-block',
    background: 'linear-gradient(90deg, #ff006e, #fb5607)',
    color: '#fff',
    fontSize: '0.7rem',
    fontWeight: '800',
    letterSpacing: '0.15em',
    padding: '4px 14px',
    borderRadius: '999px',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: '900',
    margin: '0 0 0.25rem',
    background: 'linear-gradient(90deg, #ff006e, #8338ec, #3a86ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  subheading: {
    fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
    color: '#a0aec0',
    margin: '0.5rem 0 1.25rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  divider: {
    fontSize: '1.1rem',
    letterSpacing: '0.5em',
    color: '#ff006e',
  },
}
