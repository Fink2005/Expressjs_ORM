import { Routes, Route } from "react-router-dom";
import Layout from "./template/Layout";
import Try from "./HomePage/Try";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout content={<Try />} />} />
      </Routes>
    </>
  );
}
