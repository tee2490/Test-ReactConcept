import React, { useState } from "react";
import "./Addform.css";

function Addform({ addData }) {
  const [name, setName] = useState();
  const [gender, setGender] = useState();

  const onAdd = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Math.floor(Math.random() * 9999),
      name,
      gender,
    };

    addData(newStudent);
  };

  return (
    <div>
      <form onSubmit={onAdd}>
        <div className="mb-3 addform">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="form-control mx-5"
            name="name"
            value={name}
          />

          <select name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} class="form-select select">
            <option disabled>gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addform;
