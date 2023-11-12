import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import AuthPage from "../../pages/AuthPage";
import { lazy } from "react";

const AsyncGamesPage = lazy(() => import("../../pages/GamesPage"));
const AsyncGameInfoPage = lazy(() => import("../../pages/GameInfoPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<AuthPage />} />
        <Route path="games" element={<AsyncGamesPage />} />
        <Route path="games/:id" element={<AsyncGameInfoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
