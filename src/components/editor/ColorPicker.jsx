export default function ColorPicker({ color, onChange }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      Couleur :
      <input
        type="color"
        value={color}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
