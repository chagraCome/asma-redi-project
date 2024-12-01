import { useState, useEffect } from "react";
import axios from "axios";

export const useRecipes = () => {
  const [data, setData] = useState([]);
  const api = axios.create({
    baseURL: "https://dummyjson.com/recipes",
    withCredentials: false,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setData([]);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return data;
};
export const useRecipe = (id) => {
  const [myrecipe, setmyrecipe] = useState([]);
  const api = axios.create({
    baseURL: "https://dummyjson.com/recipes/" + id,
    withCredentials: false,
  });
  useEffect(() => {
    const fetchDataRecip = async () => {
      try {
        const response = await api.get("/");
        setmyrecipe(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setmyrecipe([]);
      }
    };
    fetchDataRecip();
  }, [id]);
  console.log("https://dummyjson.com/recipes/" + id);
  console.log(myrecipe);
  //console.log("------------");
  return myrecipe;
};
