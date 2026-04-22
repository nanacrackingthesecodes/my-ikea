import './App.css';
import Recomendation from './components/Recomendation/Recomendation';
import Catalog from './components/Catalog/Catalog';
import Ideas from './components/Ideas/Ideas';
import Info from './components/Info/Info';

function App() {
  return (
    <div className="App">
      <Recomendation />
      <Catalog />
      <Ideas/>
      <Info/>
    </div>
  );
}

export default App;