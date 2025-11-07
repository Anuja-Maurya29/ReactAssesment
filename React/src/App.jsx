import React from 'react'
import './App.css'
import { WelCome } from './sectionB/Task1'
import { Student } from './sectionB/Task2'
import { Counter } from './sectionB/Task3'
import { ColorChange } from './sectionB/Task4'
import { LoginStatus } from './sectionB/Task5'
import { FruitsList } from './sectionB/Task6'
import { Dashboard } from './sectionC/Dashboard'
import { TODO2 } from './sectionC/TODO2'
import { ToggleMessage } from './sectionC/Bonus'

function App() {
  
  return(

   <div id="main">
    <p>Task1: heading</p>
     <WelCome/>
     <p> Task2:Student Data</p>
     {/* <Student  name="Rahul"  course="React Fundamentals"/> */}
     <Counter/>
     <ColorChange/>
     <LoginStatus/>
     <FruitsList/>
     <p>Admin Dashboard</p>
     <Dashboard/>
     <TODO2/>
     <ToggleMessage/>
     
   </div>

  )
  

  
}

export default App
