import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="/#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:6001/exercises/" + id)
      .then((res) => console.log("Deleted"))
      .catch((err) => console.log("Error" + err));
    setExercises(exercises.filter((elem) => elem._id !== id));
  };

  useEffect(() => {
    axios
      .get("http://localhost:6001/exercises/")
      .then((res) => setExercises(res.data))
      .catch((err) => console.log("Error" + err));
  }, []);

  const exerciseList = () => {
    return exercises.map((elem) => {
      return (
        <Exercise
          exercise={elem}
          deleteExercise={deleteExercise}
          key={elem._id}
        />
      );
    });
  };
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
