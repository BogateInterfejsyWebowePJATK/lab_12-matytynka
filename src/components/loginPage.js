import React, { useState } from "react";
import LoginForm from "./login";
import RegisTable from "./regisTable";
import RegisForm from "./regisForm";

import userData from "../data/userdata.json";

export default function LoginPage() {

    const [users, setUsers] = useState(userData);
    const [register, setRegister] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);

    function handleRegister(user) {
        let userList = [...users];
        userList.push(user);
        setUsers(userList);
    }

    function handleLogin(user) {
        setLoggedUser(user);
    }

    function handleLogout() {
        setLoggedUser(null);
    }

    return (
        <>
            {loggedUser ?
                <RegisTable user={loggedUser} logout={handleLogout} />
                :
                <>
                    {register ?
                        <>
                            <RegisForm handleRegister={handleRegister}/>
                            <br/>
                            <button onClick={() => setRegister(false)}>Zaloguj się</button>
                        </>
                        :
                        <>
                            <LoginForm userData={users} handleLogin={handleLogin}/>
                            <br/>
                            <button onClick={() => setRegister(true)}>Zarejestruj się</button>
                        </>
                    }
                </>
            }

        </>
    );
}