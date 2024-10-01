import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext({});

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

 
  
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://avtoelon.onrender.com/category", requestOptions)
      .then(response => response.json())
      .then(result => setCategory(result.category))
      .catch(error => console.log('error', error));
  }, []);
  return (
      <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};