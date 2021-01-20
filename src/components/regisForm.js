import React from "react";

export default function RegisForm({handleRegister = f => f}) {


    const [data, setData] = React.useState({})
    const [errors, setErrors] = React.useState({})


    const submit = (event) => {
        event.preventDefault()
        if (validate("", data, true)) {
            handleRegister(data)
            alert("Pomyślnie zarejestrowano!")
        }
    }

    const handleChange = (event) => {
        let input = {...data};
        if (event.target.type === "checkbox") {
            input[event.target.name] = !input[event.target.name]
        } else {
            input[event.target.name] = event.target.value;
        }
        validate(event.target.name, input, false)
    }

    const validate = (fieldName, inp, all) => {
        let input = {...inp}
        let err = true;
        let errs = {...errors}
        delete errs["message"]
        if (fieldName === "name" || all) {
            if (!input["name"]) {
                errs["name"] = "Musisz podać imię"
                err = false
            } else {
                delete errs["name"]
            }
        }
        if (fieldName === "surname" || all) {
            if (!input["surname"]) {
                errs["surname"] = "Musisz podać nazwisko"
                err = false
            } else {
                delete errs["surname"]
            }
        }
        if (fieldName === "email" || all) {
            if (!input["email"]) {
                errs["email"] = "Musisz podać e-mail"
                err = false
            } else {
                let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
                if (!pattern.test(input["email"])) {
                    errs["email"] = "Podałes nieprawidłowy e-mail"
                    err = false
                } else {
                    delete errs["email"]
                }
            }
        }
        if (fieldName === "password" || all) {
            if (!input["password"]) {
                errs["password"] = "Musisz podać hasło"
                err = false
            } else {
                let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                if (!pattern.test(input["password"])) {
                    errs["password"] = "Hasło jest za słabe"
                    err = false
                } else {
                    delete errs["password"]
                }
            }
        }
        if (fieldName === "birthdate" || all) {
            if (!input["birthdate"]) {
                errs["birthdate"] = "musisz podać datę urodzenia"
                err = false
            } else {
                let userDate = new Date(input["birthdate"])
                let now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
                let dob = userDate.getFullYear() * 10000 + userDate.getMonth() * 100 + userDate.getDay();

                if (now - dob < 180000) {
                    errs["birthdate"] = "Musisz mieć skończone 18 lat!"
                    err = false
                } else {
                    delete errs["birthdate"]
                }
            }
        }
        if (fieldName === "agreement" || all) {
            if (!input["agreement"]) {
                errs["agreement"] = "Musisz wyrazić zgode"
                err = false
            } else {
                delete errs["agreement"]
            }
        }
        if(!err) errs["message"] = "Musisz poprawić błędy!"
        setErrors(errs)
        setData(input)
        return err
    }

    const reset = () => {
        setData({
            name: "",
            surname: "",
            email: "",
            password: "",
            birthdate: "",
            agreement: false,
            image: ""
        })
        setErrors({})
    }

    return (
        <form onSubmit={submit}>
            <label>Imię:</label>
            <input value={data.name} type="text" name="name" onChange={handleChange}/><br/>
            <div className="err">{errors.name}</div>

            <label>Nazwisko:</label>
            <input value={data.surname} type="text" name="surname" onChange={handleChange}/><br/>
            <div className="err">{errors.surname}</div>

            <label>E-mail:</label>
            <input value={data.email} name="email" type="text" onChange={handleChange}/><br/>
            <div className="err">{errors.email}</div>

            <label>Hasło:</label>
            <input value={data.password} name="password" type="password" onChange={handleChange}/><br/>
            <div className="err">{errors.password}</div>

            <label>Data urodzenia:</label>
            <input value={data.birthdate} name="birthdate" type="date" onChange={handleChange}/><br/>
            <div className="err">{errors.birthdate}</div>

            <label>Czy akceptujesz warunki?:</label>
            <input type="checkbox" checked={data.agreement} name="agreement" onChange={handleChange}/><br/>
            <div className="err">{errors.agreement}</div>

            <button type="button"  onClick={() => reset()}>Reset</button><br/>
            <input type="submit" value="Zarejestruj się"/>
            <div className="err">{errors.message}</div>
        </form>
    );
}