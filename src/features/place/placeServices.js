import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const getPlaces = async () => {
  const response = await axios.get(`${base_url}place/`);

  return response.data;
};

const createPlace = async (place) => {
  const response = await axios.post(`${base_url}place/`, place, config);

  return response.data;
};
const updatePlace = async (place) => {
  const response = await axios.put(
    `${base_url}place/${place.id}`,
    { title: place.placeData.title },
    config
  );

  return response.data;
};
const getPlace = async (id) => {
  const response = await axios.get(`${base_url}place/${id}`, config);

  return response.data;
};

const deletePlace = async (id) => {
  const response = await axios.delete(`${base_url}place/${id}`, config);

  return response.data;
};

const placeService = {
  getPlaces,
  createPlace,
  getPlace,
  updatePlace,
  deletePlace,
};

export default placeService;