import { useContext, useState } from "react";
import AdminContext from "../../utils/context/AdminContext";
import { useLocation, useNavigate } from "react-router-dom";

function AddTeamMember() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');

    const {admin} = useContext(AdminContext);
    const location = useLocation();
    const clubId = location.pathname.split('/')[2];
    const navigate = useNavigate();


    async function addMember(e) {
        e.preventDefault();
        const respone = await fetch('http://localhost:3000/api/addRole', {
            method: 'POST',
            body: JSON.stringify({name: name, roleName: role, clubId: clubId, adminPrivilage: false, email: email}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `BEARER ${admin.accessToken}`
            }
        });
        const data = await respone.json();
        if(data) {
            navigate(`/club/${clubId}/team`);
        }
    }
    return (
        <div className="flex justify-center w-9/12 items-center">
            <form className="flex flex-col m-2 bg-white rounded-lg shadow-lg p-6" onSubmit={(e) => addMember(e)}>
                <input className="p-2 m-2 border-yellow-300 border-2"  type="text" name="name" placeholder="Enter name of the team member"  onChange={(e) => setName(e.target.value)} value={name}></input>
                <input className="p-2 m-2 border-yellow-300 border-2" type="text" name="role" placeholder="Enter role of the team memeber" onChange={(e) => setRole(e.target.value)} value={role}></input>
                <input className="p-2 m-2 border-yellow-300 border-2"  type="text" name="name" placeholder="Enter email id of the team member"  onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <input type="file" className="p-2 m-2" name="photo"/>
                <button className="py-2 px-4 bg-yellow-300 w-fit rounded-lg m-4 font-bold text-xl" type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddTeamMember;