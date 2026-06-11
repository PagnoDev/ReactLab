import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";

//Page Imports
import { HomePage } from "./pages/HomePage";
import { FormPage } from "./pages/FormPage";
import { RoutesPage } from "./pages/RoutesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Components } from "./pages/Components";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="forms" element={<FormPage />} />
        <Route path="routes" element={<RoutesPage />} />
        <Route path="components" element={<Components />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}