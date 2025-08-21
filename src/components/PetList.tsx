import { useEffect, useState } from 'react';
import api from '../api/api';
import type { Pet } from '../types/PetType';

const PetList = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await api.get('/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets', error);
      }
    };
    fetchPets();
  }, []);

  return (
    <div>
      <h1>Pets List</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            {pet.nickname} {pet.species} {pet.ownerId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
