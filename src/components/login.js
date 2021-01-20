import React, { useState } from "react";

export default function Login({userData, handleLogin = f => f}) {

    const [data, setData] = useState({
        email: "",
        pass: ""
    });

    const [error, setError] = useState("");

    const [logged, setLogged] = useState(false);

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validate() {
        let error = "";

        if(!validateEmail(data["email"])) {
            error = "To nie jest adres e-mail";
        }
        if (error === ""){
            for(const user of userData) {
                if (data["email"] === user.email && data["pass"] === user.password) {
                    setError("");
                    return user;
                }
            }
            error = "Nieprawidłowy e-mail lub hasło";
        }
        setError(error);
        return false;
    }

    function submit(e) {
        e.preventDefault();
        let user = validate();
        if(user !== false) {
            setLogged(true);
            handleLogin(user);
        }
    }

    return (
        <form onSubmit={submit}>
            <label>E-mail:</label><br/>
            <input value={data.email} type="text" required onChange={
            (e) => {setData({email: e.target.value, pass: data.pass})}
        }/><br/>
            <label>Hasło:</label><br/>
            <input value={data.pass} type="password" required onChange={
            (e) => {setData({email: data.email, pass: e.target.value})}
        }/><br/>
            <input type="submit" value="Zaloguj się"/>
            {logged && <p>Pomyślnie zalogowano!</p>}
            <p>{error}</p>
        </form>
    )
}