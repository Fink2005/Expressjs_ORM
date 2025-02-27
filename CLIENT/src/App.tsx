import { Route, Routes } from "react-router-dom";
import { userRouter } from "./routers/UserRouter";
import Layout from "./template/Layout";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {userRouter.map((route, index) => (
            <Route
              key={index}
              index
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}
