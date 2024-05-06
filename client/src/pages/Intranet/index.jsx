import React from "react";
import Sidebar from "../../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import TablaPaciente from "../../components/TablaPaciente";

const Intranet = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-7 text-xl font-semibold flex-1 h-screen">
          <Routes>
            <Route path="/pacientes" element={<TablaPaciente />} />
            <Route path="/pacientes" element={<TablaPaciente />} />
            <Route path="/pacientes" element={<TablaPaciente />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Intranet;
