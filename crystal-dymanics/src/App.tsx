
import MainRoutes from './router'
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';

import { useTranslation} from 'react-i18next';


function App() {
  const {t} = useTranslation()
  return (
    <Router>
      <Header />
      <section className='h-28 md:h-28 sm:h-16'/>
      <MainRoutes />
    </Router>
  )
}

export default App;
