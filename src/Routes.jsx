import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from "./Components/MainLayout/HomeLayout";
import Home from "./Components/Section/Home";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

        ]


    },
]);

