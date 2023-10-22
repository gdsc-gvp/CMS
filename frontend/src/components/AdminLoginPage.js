import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useRef } from "react";
import AdminContext from "../utils/context/AdminContext";
import { getAccessTokenAsAdminApi } from "../services/apis/public/authApis.public";

function AdminLoginPage() {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const location = useLocation();
  const clubId = location.pathname.split("/")[2];

  const { setAdmin } = useContext(AdminContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const body = { email: email.current.value, password: password.current.value, clubId };
    const response = await getAccessTokenAsAdminApi({ body });

    if (response.data?.accessToken) {
      setAdmin(response.data);
      navigate("/club/" + clubId);
    } else {
      console.log(response.data);
    }
  }

  return (
    <div className="flex justify-center w-8/12 items-center">
      <div className="flex flex-col p-6 bg-white rounded-lg w-6/12">
        <h1 className="text-3xl font-bold text-center m-4">Login As Admin</h1>
        <form method="post" className="flex flex-col" onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <input className="p-4 m-2 border-yellow-200 border-2" ref={email} autoComplete="false" placeholder="Enter your email" name="email"></input>
          <input
            className="p-4 m-2 border-yellow-200 border-2"
            ref={password}
            type="password"
            placeholder="Enter your password"
            name="password"></input>
          <button className="px-4 py-2 bg-yellow-300 rounded-lg m-4 w-fit text-xl" type="submit">
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
