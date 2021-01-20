import './App.css';
import Calculator from './components/calculator';
import Table from './components/table';
import Login from './components/login';

function App() {
  return (
      <div className="App" >

          <div className="Calculator" id="zadanie">
              <p>
                  Zadanie 1:
              </p>
            <Calculator/>
          </div>
          <div className="Table" id="zadanie">
              <p>
                  Zadanie 2:
              </p>
              <Table/>
          </div>
          <div className="Login" id="zadanie">
          <p>
              Zadanie 3:
          </p>
              <Login/>
          </div>
      </div>
  );
}

export default App;
