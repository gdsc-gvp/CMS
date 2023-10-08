import react from "react";
import reactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./components/App";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
