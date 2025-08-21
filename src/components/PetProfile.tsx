import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Pet } from '../types/PetType';
import api from '../api/api';

const PetProfile = () => {
  const { id } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await api.get('/pets/${id}');
        setPet(response.data);
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };
    fetchPet();
  }, [id]);
  if (!pet) return <p>Loading...</p>;

  return (
    <>
      <h1>{pet.nickname}</h1>
      <p>{pet.species}</p>
      <p>{pet.ownerId}</p>
    </>
  );
};

export default PetProfile;
