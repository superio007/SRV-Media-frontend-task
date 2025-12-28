import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import FallBack from "./components/Ui/Fallback";
const LandingPage = lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<FallBack />}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
