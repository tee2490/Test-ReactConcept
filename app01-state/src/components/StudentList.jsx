import React, { useState } from "react";
import "./StudentList.css";

function StudentList({data,deleteData}) {
   const [show, setShow] = useState(true);

   const table = () => (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>
              <button
                onClick={() => deleteData(item.id)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <main>
      <div className="summary">
        <p style={{backgroundColor:'cyan',fontStyle:'italic'}}>All Student : {data.length}</p>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="btn btn-primary"
        >
          {show ? "Hidden" : "Show"}
        </button>
      </div>
      {show && table()}
    </main>
  );
}

export default StudentList;
