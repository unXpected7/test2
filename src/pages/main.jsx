import axios from "axios";
import React, { useEffect, useState } from "react";

const MainPage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://119.8.167.126:90/api/BranchReps')
            .then(res => {
                setPosts(res.data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <h1>Main Page</h1>

           
        </div>
    )
}
export default MainPage;