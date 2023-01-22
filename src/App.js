
import './App.css';
import Pestanhas from './components/Pestanhas';

function App() {

  const elementos = [{
    etiqueta : "TAB1",
    contenido : "Esto contiene informacion de la pestanha 1"
  },
  {
    etiqueta : "TAB2",
    contenido : "Esto contiene informacion de la pestanha 2"
  },
  {
    etiqueta : "TAB3",
    contenido : "Esto contiene informacion de la pestanha 3"
  },
  {
    etiqueta : "TAB4",
    contenido : "Esto contiene informacion de la pestanha 4"
  }
  ]
  return (
    <div >
      <Pestanhas arrayelem={elementos}/>
    </div>
  );
}

export default App;
