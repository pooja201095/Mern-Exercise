import axios from "axios";

export const fetchExercises = async() => {
    // return await axios.get('http://localhost:5000/exercises/').then((res) => res.data);
    return await axios.get(process.env.REACT_APP_EXERCISES_API).then((res) => res.data);
}

export const addExercise = async(exercise) => {
    // return await axios.post('http://localhost:5000/exercises/add/',exercise).then((res) => res.data);
    return await axios.post(process.env.REACT_APP_EXERCISES_API, exercise).then((res) => res.data);
}

export const fetchExerciseById = async(id) => {
    // return await axios.get('http://localhost:5000/exercises/'+id).then((res) => res.data);
    return await axios.get(process.env.REACT_APP_EXERCISES_API+id).then((res) => res.data[0]);
}

export const deleteExerciseById = async(id) => {
    // return await axios.delete('http://localhost:5000/exercises/'+id).then((res) => res.data);
    return await axios.delete(process.env.REACT_APP_EXERCISES_API+id).then((res) => res.data);
}

export const updateExercise = async(id,exercise) => {
    // return await axios.post('http://localhost:5000/exercises/update/'+id,exercise).then((res) => res.data);
    return await axios.post(process.env.REACT_APP_EXERCISES_API+id,exercise).then((res) => res.data);
}