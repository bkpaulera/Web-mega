
import MainRoutes from './router'
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';

import { useTranslation} from 'react-i18next';


function App() {
  const {t} = useTranslation()
  return (
    <Router>
        <Header />
      <MainRoutes />
    </Router>
  )
}

export default App;
