export default function EditModal({ item, onSave, onClose }) {
  const [form, setForm] = React.useState(item);

  return (
    <div className="modal">
      <input value={form.make}
        onChange={e => setForm({ ...form, make: e.target.value })} />

      <input value={form.model}
        onChange={e => setForm({ ...form, model: e.target.value })} />

      <select value={form.status}
        onChange={e => setForm({ ...form, status: e.target.value })}>
        <option>Deployed</option>
        <option>Stock</option>
        <option>Repair</option>
      </select>

      <button onClick={() => onSave(form)}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
