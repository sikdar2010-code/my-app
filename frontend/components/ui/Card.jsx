export default function Card({ children }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-xl w-96">
      {children}
    </div>
  );
}