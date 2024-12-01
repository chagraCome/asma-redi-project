import { useState, useEffect } from "react";
import axios from "axios";

export const useRecipes = () => {
  const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
      } catch (err) {
        console.error("Error fetching data:", err);
        setData([]);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("Loading Status is",isLoading);
  
  console.log(data);
  return data;
};
