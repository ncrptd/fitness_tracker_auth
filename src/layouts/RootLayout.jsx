import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer className="mt-auto" />
        </div>
    );
}

export default RootLayout;
