import React from "react";
import { useEffect,useState } from "react";
import axios from "axios"
import Header from "../../components/header"

const ShowUsers = () => {
    const [allUsers , setAllUsers] = useState([])
    useEffect(() => {
        axios.get(`https://backend.paymentplanet.co/admin/getAllUsers`)
            .then(res => {
                console.log(res.data)
                setAllUsers(res.data)
        })
  });
    return <>
        <Header title="Users" />
    
    </>;
};

export default ShowUsers;
