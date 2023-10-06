import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercise } from "../store/actions/exerciseActions";
import { fetchFood } from "../store/actions/foodActions";
import { fetchGoals } from "../store/actions/goalActions";

function FitnessSummary() {
    const dispatch = useDispatch();

    const { exercises, loading: exerciseLoading } = useSelector((state) => state.exerciseReducer);
    const { foodItems, loading: foodItemsLoading } = useSelector((state) => state.foodReducer);
    const { goals, loading: goalsLoading } = useSelector((state) => state.goalReducer);

    const totalCaloriesBurned = exercises?.reduce(
        (acc, curr) => curr.caloriesBurned + acc,
        0
    );

    const totalCaloriesConsumed = foodItems?.reduce(
        (acc, curr) => curr.calories + acc,
        0
    );

    const totalCaloriesGoal = goals?.reduce(
        (acc, curr) => curr.targetCaloriesValue + acc,
        0
    );

    const remainingCaloriesToGoal = totalCaloriesGoal - totalCaloriesConsumed;

    useEffect(() => {
        dispatch(fetchExercise())
        dispatch(fetchFood())
        dispatch(fetchGoals())
    }, [dispatch]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Fitness Summary</h2>

            {exerciseLoading && foodItemsLoading && goalsLoading ? <p>Loading...</p> : <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900">Total Calories Burned</h3>
                    <p className="text-gray-700">{totalCaloriesBurned} calories</p>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900">Total Calories Consumed</h3>
                    <p className="text-gray-700">{totalCaloriesConsumed} calories</p>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900">Total Calories Goal</h3>
                    <p className="text-gray-700">{totalCaloriesGoal} calories</p>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900">Remaining Calories to Goal</h3>
                    <p className="text-gray-700">{remainingCaloriesToGoal} calories</p>
                </div>
            </div>}
        </div>
    );
}

export default FitnessSummary;
