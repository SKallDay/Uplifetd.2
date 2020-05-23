import React, {useEffect, useState} from 'react';
import StrainsModal from './strainsModal'
import strainImage from './assets/leaf.png'

const Strain = ({strain}) => {
  const [description, setDescription] = useState('');
  const [showModal, setModal] = useState(false);

  const APP_KEY = 'OcnJg8N';
  const descriptionQuery = '/strains/data/desc/';
  const url = `http://strainapi.evanbusse.com/${APP_KEY}${descriptionQuery}`;

  const getDescription = async strain => {
    const response = await fetch(url + strain.id);
    const data = await response.json();
    console.log(data);
    setDescription(data.desc);
    setModal(true);
  }

  const close = () => {
    debugger;
    setDescription('');
    setModal(false);
  }
  return (
    <div className="strains__card">
      <div className="strains__image">
        <img src={strainImage}/>
      </div>
      <h3>{strain.name}</h3>
      <p>{strain.id}</p>
      <p>{strain.race}</p>

      <button onClick={() => getDescription(strain)}>
        More Info
      </button>
      {showModal? <StrainsModal description={description} onClick={() => close()}/> : null}
    </div>
  )
}

export default Strain;