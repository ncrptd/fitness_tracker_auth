import AddFoodDialog from "./AddFoodDialog";
import FoodCard from './FoodCard';


function FoodList({ foodItems }) {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Food Tracking</h2>
            <div className="mb-4 mx-auto inline-block">
                <AddFoodDialog />
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {foodItems?.map((foodItem) => (
                    <FoodCard key={foodItem?._id} foodItem={foodItem} />
                ))}
            </div>

        </div>
    );
}

export default FoodList;
