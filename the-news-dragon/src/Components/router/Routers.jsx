import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Main from "./Main";
import Home from "../layout/Home";
import Category from "./Category";
import NewsLayout from "../layout/NewsLayout";
import News from "./News";
import LoginLayout from "../layout/LoginLayout";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Term from "./Term";
const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'term',
                element: <Term></Term>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
]);
export default router;