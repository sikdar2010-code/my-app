export default function Input({ type, name, placeholder, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}