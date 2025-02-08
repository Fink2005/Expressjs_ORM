import { Routes, Route } from "react-router-dom";
import Layout from "./template/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout content={<Home />} />} />
        <Route
          path="/image-detail/:id"
          element={<Layout content={<Details />} />}
        />
      </Routes>
    </>
  );
}
