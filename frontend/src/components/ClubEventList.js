import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ClubEventPost from './ClubEventPost';

function ClubEventList() {
    const {clubId} = useParams();
    const [eventList, setEventList] = useState();

    useEffect(() => {
        fetchEvents();
    }, []);

    async function fetchEvents() {
        const response = await fetch("http://localhost:3000/api/getPosts/" + clubId);
        const data = await response.json();
        console.log(data);
        setEventList(data);
    }

    if(!eventList) {
        return <div>loading.....</div>
    }

    return (
        <div className='m-1 w-9/12'>
            {eventList.map((post) => {
                return <ClubEventPost key={post._id} description={post.postMessage} date={post.createdAt.slice(0, 10)}/>
            })}
        </div>
    );
}

export default ClubEventList;