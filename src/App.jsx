import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import GamePage from "./pages/GamePage";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/CheckoutPage";
import SellGamesPage from "./pages/SellGamesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/games" element={<GamePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/sell-games" element={<SellGamesPage />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
