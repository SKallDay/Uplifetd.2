import React, {useEffect, useState} from 'react';
import StrainsModal from './strainsModal';
import strainImage from './assets/leaf.png';

const Strain = ({strain}) => {
  const [description, setDescription] = useState('');
  const [showModal, setModal] = useState(false);

  const APP_KEY = 'OcnJg8N';
  const descriptionQuery = '/strains/data/desc/';
  const url = `http://strainapi.evanbusse.com/${APP_KEY}${descriptionQuery}`;

  const getDescription = async strain => {
    const response = await fetch(url + strain.id);
    const data = await response.json();
    setDescription(data.desc);
    setModal(true);
  }

  const close = () => {
    setDescription('');
    setModal(false);
  }
  return (
    <div className="strain__card">
      <div className="strain__image">
        <img src={strainImage}/>
      </div>
      <h3 className="strain__heading">{strain.name}</h3>

      <button className="strain__button" onClick={() => getDescription(strain)}>
        Learn More
      </button>
      {showModal? <StrainsModal strain={strain.name} description={description} onClick={() => close()}/> : null}
    </div>
  )
}

export default Strain;