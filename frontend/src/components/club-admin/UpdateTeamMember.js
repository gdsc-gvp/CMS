import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAdmin from '../../utils/useAdmin';
import { updateRoleApi } from '../../services/apis/private/roleApis.private';

function UpdateTeamMember() {
    const [role, setRole] = useState('');
    const [adminPrivilage, setAdminAdminPrivilage] = useState(false);

    const { roleId } = useParams();
    const location = useLocation();
    const memberData = location.state;
    const navigate = useNavigate();
    const { admin } = useAdmin();

    useEffect(() => {
        setData();
    }, []);

    function setData() {
        setRole(memberData.role);
    }

    async function udpateMember() {
        const body = {clubId: memberData.clubId, roleId, newRoleName: role, newAdminPrivilage: adminPrivilage};
        const response = await updateRoleApi({body, token: admin.accessToken});
        
        if(response.data) {
            navigate(-1);
        } else {
            console.log(response);
        }
    }

    return (
        <div className='w-9/12 m-2 p-2 flex justify-center items-center'>
            <div className='bg-white rounded-lg p-4 flex flex-col items-center w-1/2'>
                <img className='w-[200px] h-[200px] rounded-full' src={memberData.memberImage || require('../../images/default-profile.png')} alt='profile pic'/>
                <input
                    className='w-full border-yellow-300 border-2 p-2 m-2'
                    type='text'
                    value={memberData.name}
                    readOnly={true}   
                ></input>
                <input
                    className='w-full border-yellow-300 border-2 p-2 m-2'
                    type='text'
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder='enter the role of teammate'
                ></input>
                <label className='m-2'>
                    <input 
                        className='mx-2'
                        type='checkbox'
                        value={adminPrivilage}
                        onChange={() => setAdminAdminPrivilage(!adminPrivilage)}
                    ></input>
                    give admin privilage
                </label>
                <div className='my-2'>
                    <button className='px-4 py-1 rounded-lg bg-yellow-300 mx-2' onClick={udpateMember}>save</button>
                    <button className='px-4 py-1 rounded-lg bg-yellow-300 mx-2' onClick={() => navigate(-1)}>cancle</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateTeamMember;