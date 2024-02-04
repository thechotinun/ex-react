import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "components/layouts";
import Login from "pages/Login";
import User from "pages/User";
import Product from "pages/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <MainLayout>
                <User />
              </MainLayout>
            }
          />
          <Route
            path="/product"
            element={
              <MainLayout>
                <Product />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
