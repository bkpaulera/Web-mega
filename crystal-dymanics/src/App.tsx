
import MainRoutes from './router'
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useTranslation} from 'react-i18next';
import { Footer } from './components/footer';


function App() {
  const {t} = useTranslation()
  useEffect(() => {
    themeChange(false)
  }, [])
  
  return (
    <Router>
      <Header />
      <section className='h-28 md:h-28 sm:h-16'/>
      <MainRoutes />
      <Footer />
    </Router>
  )
}

export default App;
