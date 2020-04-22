import React from 'react';
import './App.css';
import Greeter from './Greeter';

function App() {
  return (
    <main className="container">
      <header className="row">
        <div className="col">
          <h1>Not Really Banking Bank</h1>
        </div>
      </header>
      <div>
        <Greeter/>
      </div>
      <footer className="row">
        <div className="col">
          <p>
            Copyright &copy;2020 the Not Really Banking corporation. <br />
            <small>
              No actual resemblance to anything any company is really doing is
              expressed or implied.
            </small>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
