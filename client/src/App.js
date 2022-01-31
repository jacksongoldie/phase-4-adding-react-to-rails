import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies')
    .then(r => {
      if(r.ok){
        r.json().then(setMovies)
      }
      else{
        console.log('error')
      }
    })
  }, [])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
