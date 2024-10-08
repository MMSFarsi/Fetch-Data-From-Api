import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [pets, setPets] = useState([]);

  const loadAllPets = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    setPets(data.pets);
  };

  useEffect(() => {
    loadAllPets();
  }, []);

  const displayAllPets = () => {
    return pets.map((pet, index) => (
      <div className="col-md-3 mb-4" key={index}>
        <div className="card h-100 shadow">
          <img src={pet.image} className="card-img-top" alt={pet.pet_name} />
          <div className="card-body">
            <h5 className="card-title">{pet.pet_name}</h5>
            <p className="card-text">Breed: {pet.breed}</p>
            <p className="card-text">Date of Birth: {pet.date_of_birth}</p>
            <button className="btn btn-primary">Adopt</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {displayAllPets()}
      </div>
    </div>
  );
};

export default App;
