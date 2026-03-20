export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
          />

          <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}