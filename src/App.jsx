import { useEffect, useState } from 'react';
import './App.css'


const url = 'https://restcountries.com/v3.1/all'
const hotelsUrl = 'https://hotels4.p.rapidapi.com/v2/get-meta-data'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ea05dd0968msh3c1b1f39de4d402p1a16eejsn7dc158ad112d',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};


 function App() {

      const [hotels, setHotels] = useState([]); // Para guardar y manipular la data.
    
      useEffect(() => {
        const getData = () => {
          fetch(hotelsUrl, options)
            .then(response => response.json())
            
            .then(data => {
              const dataArray = Object.values(data);
              setHotels(dataArray)
            })
            .catch(error => console.error('Error fetching data:', error));
        };
        getData()
      }, []);

      console.log('Hotels > ', hotels)

      return (
        <div>
         {hotels && hotels.map((i) => {
          return(
            <p className='hotel'>{i.url}</p>
          )
         })}
      
        </div>
      );
    }
    

export default App
