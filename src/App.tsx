import "./App.css";
import {
  Accordion,
  TicTacToe,
  Quiz,
  RockPaperScissors,
  ScrollIndicator,
  GameMemory,
} from "./components";

import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";

// حذف `createBrowserRouter` واستخدام `Routes` بدلًا منه
function Layout() {
  const routes = [
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
    {
      path: "/gameMemory",
      element: <GameMemory />,
    },
  ];

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
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
          <Route path="/scroll-indicator" element={<ScrollIndicator />} />
          <Route path="/gameMemory" element={<GameMemory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
