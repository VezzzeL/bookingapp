import { Route, Routes } from "react-router-dom";
import "./App.css";
import { IndexPage } from "./components/pages/IndexPage";
import { LoginPage } from "./components/pages/LoginPage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
