import React, {useState} from "react";

export default function Calculator() {

    const [result, setResult] = useState(0);
    const [count, setCount] = useState(0);

    const number = React.useRef();

    const submit = s => {
        s.preventDefault();
        setResult(parseInt(number.current.value) + parseInt(result));
        setCount(count + 1);
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input ref={number} type="number" placeholder="Podaj liczbę" required/>
                <button>Wyślij</button>
            </form>
            <p>
                Suma: {result}
                <br/>
                Średnia: {result/count}
            </p>
        </div>
    );
}