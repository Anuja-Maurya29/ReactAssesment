/*## **2️⃣ Functional Component & Props**
Create a component `Student` that accepts two props:
* `name`
* `course`
Render output as:
Student Name: Rahul
Course: React Fundamentals

<Student name="Rahul" course="React Fundamentals" />
*/
import React from "react";
 export function Student(name, course){

    return(
<div>
    {/* <h1>{name}</h1> */}
   <h2>Student data:{name.name}</h2>
   <p> Student Name:{course.course}</p>
   <p>Course:</p>
</div>

    )
}