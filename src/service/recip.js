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
  const [isLoading, setIsLoading] = useState(false);
  const [myrecipe, setmyrecipe] = useState([]);
  const api2 = axios.create({
    baseURL: "https://dummyjson.com/recipes/" + id,
    withCredentials: false,
  });
  useEffect(() => {
    const fetchDataRecip = async () => {
      try {
        const response2 = await api2.get("/");
        setmyrecipe(response2.data);
        setIsLoading(true);
      } catch (err) {
        console.error("Error fetching data:", err);
        setmyrecipe([]);
        setIsLoading(false);
      }
    };
    fetchDataRecip();
  }, []);
  if (isLoading) {
    console.log(isLoading);
  }
  console.log("https://dummyjson.com/recipes/" + id);
  //console.log(myrecipe);
  //console.log("------------");
  return myrecipe;
};
