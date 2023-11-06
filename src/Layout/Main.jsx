import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import NavBar from "../Components/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;