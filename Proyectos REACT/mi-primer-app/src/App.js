import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';

function App() {

  

  function ManejarClic() {
    alert("Usted me ha dado clic");
    }

  return (
    <div>
      <MiPrimerComponente
        Nombre="Jorddy"
        Apellido1="Castro"
        Apellido2="Araya"
      ></MiPrimerComponente>
    </div>
  );
}

export default App;

