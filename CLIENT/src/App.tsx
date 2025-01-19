import { Routes, Route } from "react-router-dom";
import Try from "./HomePage/Try";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Try />} />
      </Routes>
    </>
  );
}
