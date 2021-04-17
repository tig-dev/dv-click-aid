import axios from "axios";

export const petPageLink = (pet_id) => `https://dappervolk.com/pet/${pet_id}`;

export const patPetLink = (pet_id) => `https://dappervolk.com/pet/pat/${pet_id}`;

export const chatPetLink = (pet_id) => `https://dappervolk.com/pet/chat/${pet_id}`;

export const patPet = (pet_id) =>
  axios.get(`https://dappervolk.com/pet/pat/${pet_id}`);

export const chatPet = (pet_id) =>
  axios.get(`https://dappervolk.com/pet/chat/${pet_id}`);
