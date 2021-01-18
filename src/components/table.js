import React, {useState} from "react";

export default function Table() {

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [human, setHuman] = useState();
    const [eyeColor, setEyeColor] = useState("niebieskie");
    const [gender, setGender] = useState("kobieta");
    const [send, setSend] = React.useState(false);

    const submit = s => {
        s.preventDefault();
        setSend(true);
    }

    const reset = () => {
        setName("");
        setLastName("");
        setHuman(false);
        setGender("kobieta");
        setEyeColor("niebieskie");
    }

    return (
        <div>
            {!send ?
                <div>
                    <form onSubmit={submit}>
                        <label>Imię: </label>
                        <input value={name} type="text" required onChange={(s) => setName(s.target.value)}/>
                        <br/>
                        <label>Nazwisko: </label>
                        <input value={lastName} type="text" required onChange={(s) => setLastName(s.target.value)}/>
                        <br/>
                        <label>Czy jesteś człowiekiem?: </label>
                        <input type="checkbox" checked={human} onChange={() => setHuman(!human)}/>
                        <br/>
                        <label>Kolor oczu: </label>
                        <select value={eyeColor} onChange={s => setEyeColor(s.target.value)} required>
                            <option value="niebieskie">niebieskie</option>
                            <option value="zielone">zielone</option>
                            <option value="brązowe">brązowe</option>
                            <option value="inne">inne</option>
                        </select>
                        <br/>
                        <label>Płeć: </label>
                        <br/>
                        <label>Kobieta: </label><input name="gender" type="radio" onChange={() => setGender("kobieta")} checked/>
                        <br/>
                        <label>Mężczyzna: </label><input name="gender" type="radio" onChange={() => setGender("mężczyzna")}/>
                        <br/>
                        <label>Inna: </label><input name="gender" type="radio" onChange={() => setGender("inna")}/>
                        <br/>
                        <button onClick={() => reset()}>Resetuj</button>
                        <br/>
                        <input type="submit" value="Utwórz tabelkę"/>
                    </form>
                </div>
                :
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>Imię</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Nazwisko</td>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <td>Czy jesteś człowiekiem?</td>
                            <td>{human ? "tak" : "nie"}</td>
                        </tr>
                        <tr>
                            <td>Kolor oczu</td>
                            <td>{eyeColor}</td>
                        </tr>
                        <tr>
                            <td>Płeć</td>
                            <td>{gender}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button onClick={() => setSend(false)}>Powrót</button>
                </div>
            }
        </div>
    );
}