import './App.css';
import Catalog from './components/Catalog/Catalog';
import Ideas from './components/Ideas/Ideas';
import Recomendation from './components/Recomendation/Recomendation';
import Info from './components/Info/Info';

function App() {
  return (
    <div className="App">
      <Catalog />
      <Ideas/>
      <Recomendation />
      <Info/>
    </div>
  );
}

export default App;