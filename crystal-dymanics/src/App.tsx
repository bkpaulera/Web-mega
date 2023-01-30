
import MainRoutes from './router'
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';


function App() {

  return (
    <Router>
      <Header />
      <MainRoutes />
    </Router>
  )
}

export default App;
