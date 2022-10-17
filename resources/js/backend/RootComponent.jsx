import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const RootComponent = () => {
    return (
        <div className="container">
            <Routes>
                <Route exeact path="/admin" element={<Dashboard />} />
            </Routes>
        </div>
    );
};
export default RootComponent;
