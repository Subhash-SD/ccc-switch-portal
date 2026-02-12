import { useAuth } from "../auth/AuthContext";

export default function SwitchTable({ data, onEdit, onDelete }) {
  const { user } = useAuth();

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Area</th><th>Location</th><th>Make</th>
          <th>Model</th><th>Ports</th><th>Status</th>
          {user.role === "admin" && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            <td>{d.area}</td>
            <td>{d.location}</td>
            <td>{d.make}</td>
            <td>{d.model}</td>
            <td>{d.ports}</td>
            <td>{d.status}</td>

            {user.role === "admin" && (
              <td>
                <button onClick={() => onEdit(d)}>Edit</button>
                <button onClick={() => onDelete(i)}>Delete</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
