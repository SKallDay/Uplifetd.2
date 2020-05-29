import React, {useEffect, useState} from 'react';
import './App.css';
import Strain from './strain'
import Modal from './modal'
import Footer from './footer'

const App = () => {
  const [strains, setStrains] = useState([]);
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');
  const [ageConfirmed, setConfirm] = useState(false);


  useEffect(() => {
    fetchRaces();
  },[query])

  const APP_KEY = 'OcnJg8N';
  const effectEndpoint = '/strains/search/race/';
  const url = `http://strainapi.evanbusse.com/${APP_KEY}${effectEndpoint}${query}`;

  const fetchRaces = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    matchedRaces(data)
  }

  const matchedRaces = data => {
    let strains = []
    for (let i = 0; i < 20; i++) {
      let randomNumber = Math.floor(Math.random() * data.length)
      let matchedStrains = data[randomNumber];
      strains.push(matchedStrains);
    }
    setStrains(strains);
  }

  const getQuery = e => {
    e.preventDefault();
    console.log(e.target.value);
    setQuery(e.target.value);
  }

  const confirmedAge = () => {
    setConfirm(true)
  }

  return (
    <div className="App">
      {!ageConfirmed? <Modal onClick={() => confirmedAge()} /> :
        <div className="App__container">
          <header className="hero">
            <h1 className="hero__prompt">Uplifted</h1>
          </header>
          <div className="query__container">
            <h2 className="query__prompt">Cannabis Types</h2>
            <p className="query__text">Choose a Cannabis race with the effects that you desire and learn more about that unique strain.</p>
            <div className="query__wrapper">
              <div className="query__button">
                <p className="query__race">Sativa</p>
                <button onClick={getQuery} value="Sativa" className="query__info">Sativa often produces a “mind high,” or an energizing, anxiety-reducing effect. If you use sativa-dominant strains, you may feel productive and creative, not relaxed and lethargic.</button>
              </div>
              <div className="query__button">
                <p className="query__race">Indica</p>
                <button onClick={getQuery} value="Indica" className="query__info"> Indica is sought after for its intensely relaxing effects. It may also reduce nausea and pain and increase appetite. Because of its deep relaxation effects, indica is better consumed at night.</button>
              </div>
              <div className="query__button">
                <p className="query__race">Hybrid</p>
                <button onClick={getQuery} value="Hybrid" className="query__info">Hybrids for their unique impacts. They can range from reducing anxiety and stress to easing symptoms of chemotherapy or radiation.</button>
              </div>
            </div>
          </div>
           {query ?
           <div className="strains__wrapper">
            {strains.map((strain, index) => (
              <Strain key={index} strain={strain}/>
              ))}
           </div>: null}
         <Footer />
      </div>
      }
    </div>
  );
}

export default App;