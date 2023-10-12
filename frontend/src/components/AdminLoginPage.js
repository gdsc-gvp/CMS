import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

function AdminLoginPage() {
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);

    const location = useLocation();
    const cludId = location.pathname.split('/')[2];
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost:3000/api/signInASAdmin', 
            {
                method: 'POST', 
                body: JSON.stringify({email: email.current.value, password: password.current.value, clubId: cludId}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }
        );
        const data = await response.json();

        if(data.accessToken) {
            navigate("/club/" + cludId);
        }
        console.log(data);
    }
    return (
        <div className="flex justify-center h-[100vh] items-center">
            <div className="flex flex-col p-6 bg-white rounded-lg w-4/12">
                <h1 className="text-3xl font-bold text-center m-4">Login</h1>
                <form method="post" className="flex flex-col" onSubmit={(e) => handleSubmit(e)} autoComplete="off">
                    <input className="p-4 m-2 border-yellow-200 border-2" ref={email} autoComplete="false" placeholder="Enter your email" name="email"></input>
                    <input className="p-4 m-2 border-yellow-200 border-2" ref={password} type="password" placeholder="Enter your password" name="password"></input>
                    <button className="px-4 py-2 bg-yellow-300 rounded-lg m-4 w-fit text-xl" type="submit">login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLoginPage;