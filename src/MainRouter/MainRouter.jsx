import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PurchaseCoin from "../Pages/PurchaseCoin/PurchaseCoin";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addRecipes',
                element: <AddRecipes />
            },
            {
                path: '/purchaseCoin',
                element: <PurchaseCoin />
            },
        ]
    }
])

export default MainRouter;