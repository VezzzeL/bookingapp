import { Route, Routes } from "react-router-dom";
import "./App.css";
import { IndexPage } from "./components/pages/IndexPage";
import { LoginPage } from "./components/pages/LoginPage";
import { Layout } from "./components/Layout";
import { RegisterPage } from "./components/pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./components/UserContext";
import { ProfilePage } from "./components/pages/ProfilePage";
import { PlacesPage } from "./components/pages/PlacesPage";
import { PlacesForm } from "./components/PlacesForm";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
