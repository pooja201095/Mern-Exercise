import { useEffect, useState } from "react";
import ExerciseItem from "./ExerciseItem";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';

import { fetchExercises,deleteExerciseById } from "../Api/fetchExercises";

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises().then((res)=>{
        setExercises(res);
    });
  }, []);

  function deleteExercise(id) {
    deleteExerciseById(id).then((res)=>{
      console.log(res);
      setExercises(exercises.filter((el) => el._id !== id));
    });
  }

  return (
    <div>
      <Navbar>
        <li className='nav-item'>
          <Link to='/create' className='nav-link' href='#'>
            Create Exercise
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/user' className='nav-link' href='#'>
            Add User
          </Link>
        </li>
      </Navbar>
      <h3>Exercises</h3>
      {exercises.length ? (
        exercises.map((exercise) => {
          return (
            <ExerciseItem
              key={exercise._id}
              exercise={exercise}
              deleteExercise={deleteExercise}></ExerciseItem>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default ExerciseList;
