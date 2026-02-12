export default function Filters({ setFilter }) {
  return (
    <div>
      <select onChange={e => setFilter("area", e.target.value)}>
        <option value="">All Areas</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="GH-1">GH-1</option>
      </select>

      <select onChange={e => setFilter("status", e.target.value)}>
        <option value="">All Status</option>
        <option>Deployed</option>
        <option>Stock</option>
        <option>Repair</option>
      </select>

      <input
        placeholder="Search Make / Model"
        onChange={e => setFilter("text", e.target.value)}
      />
    </div>
  );
}
