import {createBrowserRouter, Outlet} from "react-router-dom";
import Header from "./Header";
import HomeBody from "./HomeBody";
import ClubPage from "./ClubPage";
import ClubOverview from "./ClubOverview";
import ClubTeamList from "./ClubTeamList";
import LoginPage from "./LoginPage";

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
                path: "/club/:clubId",
                element: <ClubPage/>,
                children: [
                    {
                        path: "/club/:clubId/",
                        element: <ClubOverview/>
                    },
                    {
                        path: "/club/:clubId/team",
                        element: <ClubTeamList/>
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
]);

export default appRouter;