import { useContext } from "react";
import AdminContext from "../../utils/context/AdminContext";
import { useNavigate } from "react-router-dom";
import { deleteRoleApi } from "../../services/apis/private/roleApis.private";

function DeleteTeamMember(props) {
  const { roleId, clubId } = props;
  const { admin } = useContext(AdminContext);
  const navigate = useNavigate();

  async function deleteMember() {
    const body = { roleId, clubId };

    const response = await deleteRoleApi({ body, token: admin.accessToken });

    if (response.data) navigate(0);
  }

  return (
    <div>
      <button className="px-4 py-1 bg-yellow-300 rounded-lg" onClick={deleteMember}>
        delete
      </button>
    </div>
  );
}

export default DeleteTeamMember;
