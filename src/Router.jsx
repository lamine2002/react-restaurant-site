import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Menu from "./components/Menu.jsx";
import Reservation from "./components/Reservation.jsx";
import APropos from "./components/APropos.jsx";
import ContactezNous from "./components/ContactezNous.jsx";



const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            // errorElement: <ErrorPage />,
        },
       {
            path: "/menu",
            element: <Menu />,
        },
        {
           path: '/reservation',
           element: <Reservation />,
       },
        {
            path: "/apropos",
            element: <APropos />,
        },
        {
            path: "/contact",
            element: <ContactezNous />,
        },


    ]);

    return <RouterProvider router={router} />;
};

export default Router;