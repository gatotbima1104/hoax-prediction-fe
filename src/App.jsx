import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Predict from './components/predict';
import Home from './components/homepage';
import Menu from './components/navigasi';

function App() {
  return (
    <div>
      <Menu />
      <Home />
      <Predict /> 
    </div>
  )
}

export default App
