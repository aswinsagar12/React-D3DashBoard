import './App.css';
import Chart from './Chart';
import D3Chart from './D3Chart';
import RegForm from './components/RegForm';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">

       <RegForm />
      <D3Chart/>
    </div>
  );
}

export default App;
