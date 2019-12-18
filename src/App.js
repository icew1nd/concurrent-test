import React, { useState, useEffect } from "react";
import logo from "./bankdata-logo-green.png";
import "./App.css";

const data = [
  {
    name: "Bauhaus",
    amount: "10.00",
    date: "17/10/1"
  },
  {
    name: "Bilka",
    amount: "10.00"
  },
  {
    name: "Føtex",
    amount: "10.00"
  }
];

function Table(props) {
  const data = props.data;
  const [searchData, setSearchData] = useState(data);
  console.log(data);
  return (
    <>
      <Search baseData={data} setSearchData={setSearchData} />
      <table className="Table">
        {searchData.map(row => (
          <tr>
            <td className="Cell-left">
              {row.name}
              <div>
                <i className="Cell-date">{row.date}</i>
              </div>
            </td>
            <td className="Cell-right">{row.amount} kr.</td>
          </tr>
        ))}
      </table>
    </>
  );
}

function Search(props) {
  const searchIt = event => {
    const searchTerm = event.target.value.toLowerCase();

    props.setSearchData(
      props.baseData.filter(row => {
        const name = row.name.toLowerCase();
        return name.indexOf(searchTerm) > -1;
      })
    );
  };
  return (
    <input
      onChange={searchIt}
      className="Search"
      type="text"
      placeholder="Søg..."
    ></input>
  );
}

function AngryConsole() {
  const [consoleData, setConsoleData] = useState([]);
  const [loop, setLoop] = useState();
  useEffect(() => {
    setInterval(() => {
      calculatePrimes(50000, 500);
    }, 1000);
  });

  function calculatePrimes(iterations, multiplier) {
    var primes = [];
    console.log("calculating");
    for (var i = 0; i < iterations; i++) {
      var candidate = i * (multiplier * Math.random());
      var isPrime = true;
      for (var c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(candidate);
      }
    }
    console.log(primes);

    return primes;
  }

  return (
    <div>
      yihaa
      {JSON.stringify(consoleData)}
      {/* {consoleData.map(row => (
        <span>{row.output}</span>
      ))} */}
    </div>
  );
}

function App() {
  const [baseData, setBaseData] = useState(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo" alt="logo" />

        <Table data={data} />
        {/* <AngryConsole /> */}
      </header>
    </div>
  );
}

export default App;
