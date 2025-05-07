import Navbar from '../components/navbar';
import Link from 'next/link';

export default function Home() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundImage: 'url("/img/buku.avif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundBlendMode: 'darken',
    },
    textContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Increased transparency
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
    },
    title: {
      color: '#333333', // Slightly darker color for the title
      fontSize: '2.5rem',
      marginBottom: '10px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Outline effect
    },
    description: {
      color: '#555555', // Slightly darker color for the description
      fontSize: '1.2rem',
      marginBottom: '20px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Outline effect
    },
    link: {
      color: '#3498db',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Outline effect
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Perpustakaan Kelas Industri</h1>
        <p style={styles.description}>
          Selamat datang di perpustakaan digital kami. Temukan berbagai koleksi buku menarik di sini.
        </p>
        <Link href="/books" style={styles.link}>
          Jelajahi Koleksi Buku
        </Link>
      </div>
    </div>
  );
}