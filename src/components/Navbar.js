import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#003366",
      color: "white"
    }}>
      <h3>CCC Switch Management Portal</h3>

      <div>
        <span style={{ marginRight: 15 }}>
          Role: <b>{user.role.toUpperCase()}</b>
        </span>

        {user.role !== "public" && (
          <button
            onClick={logout}
            style={{
              padding: "6px 12px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
