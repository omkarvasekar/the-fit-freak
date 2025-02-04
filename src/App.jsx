
import { useState } from 'react'
import './App.css'
import Generator from './components/Generator'
import Hero from './components/Hero'
import Workout from './components/Workout'
import { GenerateWorkout } from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscle, setMuscle] = useState([])
  const [goal, setGoal] = useState('strength_power')


  function updateWorkout() {
    if(muscle.length<1)
    {
      return
    }
    let newWorkout=GenerateWorkout({poison,muscle,goal})
    window.location.href='#plan'
    setWorkout(newWorkout)
  }


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white sm:text-base'>
      <Hero />
      <Generator 
      poison={poison}
      setPoison={setPoison} 
      muscle={muscle}
      setMuscle={setMuscle}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
