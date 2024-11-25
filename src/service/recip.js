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

  return data;
};
