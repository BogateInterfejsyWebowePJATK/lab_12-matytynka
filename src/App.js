import './App.css';
import Calculator from './components/calculator';
import Table from './components/table';
import LoginPage from './components/loginPage';

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
          <div className="LoginPage" id="zadanie">
              <p>
                  Zadanie 3/4:
              </p>
              <LoginPage/>
          </div>
      </div>
  );
}

export default App;
