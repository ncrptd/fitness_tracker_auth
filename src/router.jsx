import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Food from "./pages/Food";
import Goal from "./pages/Goal";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/exercises" element={<Exercise />} />
            <Route path="/foods" element={<Food />} />
            <Route path="/goals" element={<Goal />} />
        </Route>
    )
);
