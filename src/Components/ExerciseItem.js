import { Link } from "react-router-dom";

function ExerciseItem({exercise,deleteExercise}) {
    return (
        <div className='exercise-flex'>
              <div>Username: {exercise.username}</div>
              <div>Description: {exercise.description}</div>
              <div>Duration: {exercise.duration}</div>
              <div>Date: {exercise.date && exercise.date.substring(0, 10)}</div>
              <div className='action'>
                <Link to={`/edit/${exercise._id}`}>Edit</Link> |{" "}
                <a href='#' onClick={() => deleteExercise(exercise._id)}>
                  Delete
                </a>
              </div>
            </div>
    )
}

export default ExerciseItem;