import useAdmin from "../../utils/useAdmin";
import { useNavigate } from "react-router-dom";
import { deleteEventApi } from "../../services/apis/private/eventApis.private";

function DeleteEvent(props) {
  const { id, clubId } = props;
  const { admin } = useAdmin();

  const navigate = useNavigate();

  async function deleteEvent() {
    const body = { clubId, postId: id };

    const response = await deleteEventApi({ body, token: admin.accessToken });

    if (response.data) navigate(0);
  }

  return (
    <div className="my-3">
      <button className="px-4 py-1 rounded-lg bg-yellow-300" onClick={deleteEvent}>
        delete
      </button>
    </div>
  );
}

export default DeleteEvent;
