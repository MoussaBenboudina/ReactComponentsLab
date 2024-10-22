import "./App.css";
import {
  Accordion,
  TicTacToe,
  Quiz,
  RockPaperScissors,
  ScrollIndicator,
  // Sidebar,
  GameMemory,
} from "./components";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
  RouteObject,
} from "react-router-dom";
// import GameMemory from "./components/GameMemory";

const routes: RouteObject[] = [
  {
    path: "/accordion",
    element: <Accordion />,
  },
  {
    path: "/TicTacToe",
    element: <TicTacToe />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/rock-paper-scissors",
    element: <RockPaperScissors />,
  },
  {
    path: "/scroll-indicator",
    element: <ScrollIndicator />,
  },
  // {
  //   path: "/sidebar",
  //   element: <Sidebar />,
  // },
  {
    path: "/gameMemory",
    element: <GameMemory />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  ...routes,
]);

function Layout() {
  return (
    <main className="app h-fit w-full py-6 px-4 flex justify-center items-center flex-wrap gap-2">
      {routes.map((route, index) => (
        <Link
          key={route.path}
          to={route.path as string}
          className={` ${
            index % 2 === 0 ? "bg-gray-600" : "bg-gray-800"
          } w-3/12 h-20 min-w-[300px]  bg-gray-900 rounded-lg shadow-lg flex justify-center items-center`}
        >
          {route.path?.replace("/", "")}
        </Link>
      ))}
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-500 flex justify-center ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
