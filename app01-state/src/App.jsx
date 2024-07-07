import React,{useState} from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Addform from "./components/Addform";

function App() {
  let students = [];

  const gen = ["male","female"]

  for (let index = 0; index < 5; index++) {
    const number = Math.floor(Math.random()*2)

    let student = {
      id: index,
      name: "Student" + index,
      gender : gen[number]
    };

    students.push(student);
  }

  const [data, setData] = useState(students);

const addData = (newStudent)=>{
 setData([...data,newStudent])
}

  const deleteData = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  return (
    <div>
      <Header title="Student List" major="Comcience"/>
      <Addform addData={addData}/>
      <StudentList data={data} deleteData={deleteData} />
    </div>
  );
}

export default App;
