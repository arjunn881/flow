
import './App.css';
import Header from './component/header/header';
import { BrowserRouter as Router } from 'react-router-dom'
import AllRouter from './component/AllRouters/AllRouter';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <AllRouter/>
      </Router>
    </div>
  );
}

export default App;
