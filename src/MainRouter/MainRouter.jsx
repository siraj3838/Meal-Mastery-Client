import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PurchaseCoin from "../Pages/PurchaseCoin/PurchaseCoin";
import FoodDetails from "../components/Details/FoodDetails";
import Recipes from "../Pages/Recipes/Recipes";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

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
                element: <PrivateRouter><AddRecipes /></PrivateRouter>
            },
            {
                path: '/purchaseCoin',
                element: <PurchaseCoin />
            },
            {
                path: '/recipes',
                element: <Recipes />
            },
            {
                path: '/foodDetails/:title',
                element: <FoodDetails />
            },
        ]
    }
])

export default MainRouter;