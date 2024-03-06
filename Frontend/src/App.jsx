import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
//Here we use axios because in it we dont have to use json it will automatically convert it into it

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      console.log(response.data)
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
     <h1>Trying to connect Backend with Frontend</h1>
     <p>JOKES: {jokes.length}</p>
     

   {
    jokes.map((joke,index) =>(
   <div>
     <p>{joke.setup}</p>
    <p>{joke.punchline}</p>
   </div>
    ))
   }
    </>
  )
}

export default App
