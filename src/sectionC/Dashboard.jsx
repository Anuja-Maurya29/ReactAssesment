/* ### **1️⃣ Student Dashboard (25 Marks)**

**Goal:** Combine props, state, and lists.

Build a component `Dashboard`:

* Maintain state `students` (array of student objects `{name, course}`).
* Display them in a table/list.
* Add an input and button to **add a new student**.
* Each student should render as:

  ```txt
  Name: <name> | Course: <course>
  ```
* If the list is empty, show: `"No students yet!"`

**Key Concepts:**
State management, rendering lists, conditional rendering, event handling.*/

import React from "react";
import { useState } from "react";
 export function Dashboard(){

    const[name,setName] =useState(" ")
    const[course,setCourse] =useState(" ")
    const[Students,setStudents] =useState([{}])

    function getName(event){
setName(event.target.value)

    }

    function getCourse(event){
    setCourse(event.target.value)
    
    }

    function handleData(){

        setStudents({name:course})
        // Students.keys=name;
        // Students.value=course
    }
    console.log(Students);

    return(
    <>
  
    <div id="admin">
         <label htmlFor="uname">Enter Name</label>
    <input onChange={getName} type="text" name="uname" value={name} />
<br />
    <label htmlFor="course">Enter Course</label>
    <input onChange={getCourse} type="text" name="course"  value={course}/>
     <br />
    <button onClick={handleData} type="submit">Add Data</button>
    
    </div>

    </>
    )
}