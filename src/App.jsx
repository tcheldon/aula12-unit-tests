import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import List from './components/List';

function App() {

  const [items, setItems] = useState([]);

  const loadDetails = (items) => {
    const promises = items.map((item) => {
      return fetch(item.url).then((response) => response.json())
    });

    Promise.all(promises).then((data) => {
      setItems(data);
    });
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { results } = data;
      loadDetails(results);

    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;