import { AuthProvider, useAuth } from "./auth/AuthContext";
import Login from "./components/Login";
import SwitchTable from "./components/SwitchTable";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      {/* Rest of your app */}

function MainApp() {
  const { user } = useAuth();
  return user ? <SwitchTable /> : <Login />;
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
