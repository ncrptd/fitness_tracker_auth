import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="shadow-lg py-4  p-2 flex-wrap">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Fitness Tracker</h1>
                <nav className="space-x-4">
                    <Link to="/" className=" hover:underline">Home</Link>
                    <Link to="/exercises" className=" hover:underline">Exercises</Link>
                    <Link to="/foods" className=" hover:underline">Foods</Link>
                    <Link to="/goals" className=" hover:underline">Goals</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
