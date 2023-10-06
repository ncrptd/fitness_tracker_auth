import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../store/actions/exerciseActions";
function AddExercise({ setOpen }) {
    const dispatch = useDispatch();

    const [exerciseDetails, setExerciseDetails] = useState({
        name: "",
        duration: 0,
    });

    const calculateCaloriesBurned = (duration) => {

        const caloriesPerMinute = 5;
        return duration * caloriesPerMinute;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExerciseDetails({
            ...exerciseDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const caloriesBurned = calculateCaloriesBurned(exerciseDetails.duration);

        const exercise = {
            name: exerciseDetails.name,
            duration: exerciseDetails.duration,
            caloriesBurned: caloriesBurned,
        };

        dispatch(addExercise(exercise));

        setExerciseDetails({
            name: "",
            duration: 0,
        });
        setOpen(false)
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Add Exercise</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium">Exercise Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={exerciseDetails.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="duration" className="block font-medium">Duration (minutes)</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={exerciseDetails.duration}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                >
                    Add Exercise
                </button>
            </form>
        </div>
    );
}

export default AddExercise;
