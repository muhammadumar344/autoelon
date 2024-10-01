import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardContext = createContext({});

export const useCardContext = () => useContext(CardContext);

export const CardContextProvider = ({ children }) => {
  const [card, setCards] = useState([]);
  const [oneCar, setOneCar] = useState();



  const options = {
    method: 'GET',
  };
  

  useEffect(() => {
    fetch(" https://avtoelon.onrender.com/car", options)
  .then(response => response.json())
  .then(({cars}) => setCards(cars))
  .catch(error => console.log('error', error));
  }, []);
  return (
      <CardContext.Provider value={{ card, oneCar }}>
      {children}
    </CardContext.Provider>
  );
};