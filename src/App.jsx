import { useState } from "react";
import 'style.css'; // Asegúrate de que la ruta sea correcta

function App() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChange1 = (event) => {
    setN1(event.target.value);
  };

  const handleChange2 = (e) => {
    setN2(e.target.value);
  };

  const handleSumar = () => {
    setResultado(parseFloat(n1) + parseFloat(n2));
  };

  const handleRestar = () => {
    setResultado(parseFloat(n1) - parseFloat(n2));
  };

  const handleMulti = () => {
    setResultado(parseFloat(n1) * parseFloat(n2));
  };

  const handleDividir = () => {
    setResultado(parseFloat(n1) / parseFloat(n2));
  };

  return (
    <div className="calculator">
      <h1>CALCULADORA</h1>
      <input type="text" placeholder="Numero 1" value={n1} onChange={handleChange1} />
      <input type="text" placeholder="Numero 2" value={n2} onChange={handleChange2} />
      <hr />
      <button onClick={handleSumar}>+</button>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleMulti}>x</button>
      <button onClick={handleDividir}>/</button>
      <hr />
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default App;
