import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAdmin from "../../utils/useAdmin";
import { updateEventApi } from "../../services/apis/private/eventApis.private";
import useImageConverter from '../../utils/useImageConverter';

function UpdateEventPost() {
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postImage, setPostImage] = useState();

    const { postId } = useParams();
    const location = useLocation();
    const postData = location.state;
    const navigate = useNavigate();
    const { admin } = useAdmin();
    const handleImageUpload = useImageConverter;

    useEffect(() => {
        setData();
    }, []);

    async function setData() {
        setPostTitle(postData.title);
        setPostDescription(postData.description);
        setPostImage(postData.postImage);
    }

    async function updatePost() {
        const body = {clubId: postData.clubId, postId, newPostMessage: postDescription, newPostTitle: postTitle, newPostImage: postImage};
        const response = await updateEventApi({body, token: admin.accessToken});

        if(response.data) {
            navigate(-1);
        }
    }

    return (
        <div className="flex justify-center items-center w-9/12 m-2 p-2">
            <div className="bg-white p-2 flex flex-col w-3/4 rounded-lg">
                <input 
                    className="border-yellow-300 border-2 p-2 m-2"
                    type="text"
                    value={postTitle} 
                    placeholder="Enter post title" 
                    onChange={(e) => setPostTitle(e.target.value)}
                ></input>
                <textarea 
                    className="border-yellow-300 border-2 p-2 m-2"
                    rows={10}
                    value={postDescription}
                    placeholder="Enter the post description"
                    onChange={(e) => setPostDescription(e.target.value)}
                ></textarea>
                <label className="m-2 p-2">
                    <input
                        type="file"
                        hidden="true"
                        onChange={(e) => handleImageUpload(e, setPostImage)}
                    ></input>
                    <img src={postImage} alt="event image" className="w-[100px] h-[100px] my-2"></img>
                    <p className="py-2 px-4 bg-yellow-300 rounded-lg w-fit cursor-pointer">Upload image to change post image</p>
                </label>
                <div className="m-2 p-2">
                    <button className="m-1 py-2 px-4 bg-yellow-300 rounded-lg" onClick={updatePost}>save</button>
                    <button className="m-1 py-2 px-4 bg-yellow-300 rounded-lg" onClick={() => navigate(-1)}>cancle</button>
                </div>
                
            </div>
        </div>
    );
}

export default UpdateEventPost;