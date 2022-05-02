import logo from './assets/images/logo.svg';
import './assets/css/App.css';
//Importar componentes
import Componente from './components/Componente';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Que pasa con el ssdmarceliño
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className="componentes">
        <Componente/>
      </section>
      </header>
    </div>
  );
}

export default App;
