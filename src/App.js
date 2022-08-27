import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ExerciseList from "./Components/ExerciseList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";

function App() {
  return (
    <Router>
      <div className='container'>
        <br />
        <Routes>
          <Route path='/' exact element={<ExerciseList />} />
          <Route path='/edit/:id' element={<EditExercise />} />
          <Route path='/create' element={<CreateExercise />} />
          <Route path='/user' element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
