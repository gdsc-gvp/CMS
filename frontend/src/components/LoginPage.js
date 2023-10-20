import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokenApi } from "../services/apis/public/authApis.public";

function LoginPage() {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const body = { email: email.current.value, password: password.current.value };
    const response = await getAccessTokenApi({ body });

    if (response.data?.accessToken) {
      navigate("/");
    }
    console.log(response);
  }
  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div className="flex flex-col p-6 bg-white rounded-lg w-4/12">
        <h1 className="text-3xl font-bold text-center m-4">Login</h1>
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

export default LoginPage;
