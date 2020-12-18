import { useEffect, useState } from 'react';

export default function Bored() {
    const [activity, setActivity] = useState();
    const [willFetch, setWillFetch] = useState(0);

    useEffect(() => {
        (async function getActivity() {
            const response = await fetch("https://www.boredapi.com/api/activity");
            const result = await response.json();
            setActivity(result?.activity);
        })();
    }, [willFetch]);

    return (
        <>
            <br></br>
            <button onClick={() => setWillFetch(willFetch + 1)}>Get new activity</button>
            <br></br>
            {activity}  
        </>
    );
}

