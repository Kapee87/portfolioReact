import { createBrowserRouter } from "react-router-dom";
import Hero from "../components/Hero";
import Layout from "../Layout/Layout";
import PageNotFound from "../components/PageNotFound";
import About from "../components/About";
import Projects from "../components/Projects";
import Education from "../components/Education";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <Hero /> },
            { path: '/about', element: <About /> },
            { path: '/projects', element: <Projects /> },
            { path: '/education', element: <Education /> }
        ]
    },
    { path: '*', element: <PageNotFound /> }

])


export default router