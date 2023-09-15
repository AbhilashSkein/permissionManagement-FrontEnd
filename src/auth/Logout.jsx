import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout=()=>{
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const handleLogout = () =>{
        navigate('/');
    }
    useEffect(()=>{
        if(!token){
            navigate('/');
        }
    });
    
    return(
        <>
            <Button onClick={handleLogout} className="logoutButton">Logout</Button>
        </>
    )
}

export default Logout