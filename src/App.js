import './App.css';
import Calculator from './components/calculator';
import Table from './components/table';

function App() {
  return (
      <div className="App" >

          <div className="Calculator" style={{border: "1px solid black"}}>
              <p>
                  Zadanie 1:
              </p>
            <Calculator/>
          </div>
          <div className="Table" style={{border: "1px solid black"}}>
              <p>
                  Zadanie 2:
              </p>
              <Table/>
          </div>
      </div>
  );
}

export default App;
