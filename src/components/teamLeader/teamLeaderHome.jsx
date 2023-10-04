import axios from "axios";
import { useEffect } from "react";

const TeamLeaderHome = () =>{
let status= 3;
    useEffect(()=>{
        axios
        .get(`http://localhost:8080/demo/user/permission/${status}`)
        .then((response) => (response ? console.log(response?.data) : null))
        .catch((err) => console.error(err));
        
    });
    return(
        <>
            <h1>hiiii</h1>
            <button>click me</button>
        </>
    )
}

export default TeamLeaderHome;