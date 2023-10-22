import {createBrowserRouter, Outlet} from "react-router-dom";
import Header from "./Header";
import HomeBody from "./HomeBody";
import ClubPage from "./ClubPage";
import ClubOverview from "./ClubOverview";
import ClubTeamList from "./ClubTeamList";
import LoginPage from "./LoginPage";
import AdminLoginPage from "./AdminLoginPage";
import ClubEventList from "./ClubEventList";
import AddTeamMember from "./club-admin/AddTeamMember";
import AddEvent from "./club-admin/AddEvent";
import UpdateOverview from "./club-admin/UpdateOverview";
import UpdateEventPost from "./club-admin/UpdateEventPost";
import UpdateTeamMember from "./club-admin/UpdateTeamMember";

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
                    },
                    {
                        path: "/club/:clubId/events",
                        element: <ClubEventList/>
                    },
                    {
                        path: "/club/:clubId/login",
                        element: <AdminLoginPage/>
                    },
                    {
                        path: "/club/:clubId/addTeamMember",
                        element: <AddTeamMember/>
                    },
                    {
                        path: "/club/:clubId/addEvent",
                        element: <AddEvent/>
                    },
                    {
                        path: "/club/:clubId/updateOverview",
                        element: <UpdateOverview/>
                    },
                    {
                        path: "/club/:clubId/updatePost/:postId",
                        element: <UpdateEventPost/>
                    },
                    {
                        path: "/club/:clubId/updateMember/:roleId",
                        element: <UpdateTeamMember/>
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
]);

export default appRouter;