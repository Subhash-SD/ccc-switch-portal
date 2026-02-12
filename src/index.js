export default function Dashboard({ data }) {
  const count = s => data.filter(d => d.status === s).length;

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div>Total: {data.length}</div>
      <div>Deployed: {count("Deployed")}</div>
      <div>Stock: {count("Stock")}</div>
      <div>Repair: {count("Repair")}</div>
      <div>Not Working: {count("Not Working")}</div>
    </div>
  );
}
