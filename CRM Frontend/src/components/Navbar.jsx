import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-white text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black px-5">
        CRM 
      </h1>

      <div className="flex items-center gap-4 text-black  ">
        <span>
          {user?.name}
        </span>

        <button
          onClick={logout}
          className="bg-white text-blue-600 hover:text-red-800 px-4 py-2 rounded-3xl"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;