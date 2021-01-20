import React from "react";

export default function RegisTable({user, logout = f => f}) {

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>Imię</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Nazwisko</td>
                    <td>{user.surname}</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Data urodzenia</td>
                    <td>{user.birthdate}</td>
                </tr>
                <tr>
                    <td>Czy akceptujesz warunki?</td>
                    <td>{user.agreement ? "tak" : "nie"}</td>
                </tr>
                </tbody>
            </table>
        <button onClick={logout}>Wyloguj</button>
        </div>
    );
}