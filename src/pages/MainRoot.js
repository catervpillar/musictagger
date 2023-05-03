import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";

const MainRootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainRootLayout;