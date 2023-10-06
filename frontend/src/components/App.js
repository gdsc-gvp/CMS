import {createBrowserRouter, Outlet} from "react-router-dom";
import Header from "./Header";
import HomeBody from "./HomeBody";
import ClubPage from "./ClubPage";

function App() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomeBody/>
            },
            {
                path: "/club/:clubid",
                element: <ClubPage/>
            }
        ]
    }
]);

export default appRouter;