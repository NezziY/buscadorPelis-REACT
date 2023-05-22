import { Link } from 'react-router-dom';
import MoviesGrid from '../components/MoviesGrid';
import Footer from '../components/Footer';
import styles from './Home.module.css';

function Home() {  
  
  return (
    <div>
      
      <header>
        <Link to="/"><h1 className={styles.title}>Películas</h1></Link>
      </header>

      <main>
        <MoviesGrid />
      </main>

      <Footer />
     
    </div>
    
  )
}

export default Home;
