import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from './../pages/inedex';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
