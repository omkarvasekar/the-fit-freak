import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/soldier'
import Button from './Button'

function Header(props) {
    const {index, title ,description}=props
    return(
        <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-2'>
            <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
            <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
        </div>
        <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>

    )
}
const Generator = (props) => {
 const {poison, setPoison , muscle , setMuscle , goal,setGoal, updateWorkout}=props
 const [showModal, setshowModal]=useState(false)
 
 function changeModal(){
    
    setshowModal(!showModal)
 }
 function updateMuscles(muscleGroup) {
    if (muscle.includes(muscleGroup)) {
        setMuscle(muscle.filter(val => val !== muscleGroup))
        return
    }

    if (muscle.length > 2) {
        return
    }

    if (poison !== 'individual') {
        setMuscle([muscleGroup])
        setshowModal(false)
        return
    }

    setMuscle([...muscle, muscleGroup])
    if (muscle.length === 2) {
        setshowModal(false)
    }

}

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={["It\'s", "Fit" ,"O\'clock"]}>
        <Header index={'01'} title={"Pick your Choice"} description={" Select the workout that you want to enjoy!"}/>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={()=>{
                            setPoison(type) 
                            setMuscle([])
                        }} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' +  (type === poison ? ' border-blue-600' : ' border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={"Lock On Target"} description={" Select the muscle you want to Train!"}/>
            <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
           
                    <button onClick={changeModal} className=' relative flex items-center justify-center p-3'>
                    <p className='capitalize'>{muscle.length==0 ? 'Select Muscle Groups' : muscle.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                    </button>
                    {showModal && (
                        <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscle.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                    )}
  
            </div>
            <Header index={'03'} title={"Let's Get Fit"} description={" Select your Ultimate Objective."}/>
        <div className='grid  grid-cols-1 sm:grid-cols-3  gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={()=>{
                            setGoal(scheme)
                        }} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' +  (scheme === goal ? ' border-blue-600' : ' border-blue-400')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Button  text={'Formulate'} func={updateWorkout}/>
    </SectionWrapper>
    
  )
}

export default Generator