import { useState, useEffect } from "react";
import axios from "axios";

export const useRecipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
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
