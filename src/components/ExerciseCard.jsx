import { useDispatch } from "react-redux";
import { removeExercise } from "../store/actions/exerciseActions";

function ExerciseCard({ exercise }) {
    const dispatch = useDispatch();

    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 flex flex-col justify-between">
            <h5 className="mb-2 text-xl font-semibold text-gray-900">Exercise Name: {exercise?.name}</h5>
            <p className="mb-3 text-gray-700">Duration: {exercise?.duration} minutes</p>

            <button
                onClick={() => dispatch(removeExercise(exercise?._id))}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none"
            >
                Remove
            </button>
        </div>
    );
}

export default ExerciseCard;
