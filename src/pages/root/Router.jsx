import { createBrowserRouter } from 'react-router-dom';
import Root from "./Root.jsx"
import Home from "../home/Home.jsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "", element: <Home /> },
            { path: "crafted", element: <h1>Cracted</h1>},
            { path: "used", element: <h1>Used</h1>},
            { path: "mined", element: <h1>mined</h1>},
            { path: "picked_up", element: <h1>picked_up</h1>},
            { path: "dropped", element: <h1>dropped</h1>},
            { path: "killed", element: <h1>killed</h1>},
            { path: "killed_by", element: <h1>killed_by</h1>},
            { path: "custom", element: <h1>custom</h1>},
        ],
    },
], {basename: "/minecraftStats"});

export default router;