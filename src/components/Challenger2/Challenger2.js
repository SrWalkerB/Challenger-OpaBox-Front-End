import { useState } from "react";
import { API_Interlace } from "../../services/API";
import "./style.css"

console.clear();

function Challenger02(){

    const [result, setResult] = useState();

    async function Verify(){

        const intervalo_A_1 = document.querySelector('#input-intervalo-a-1').value;
        const intervalo_A_2 = document.querySelector('#input-intervalo-a-2').value;
        const intervalo_B_1 = document.querySelector('#input-intervalo-b-1').value;
        const intervalo_B_2 = document.querySelector('#input-intervalo-b-2').value;

        const intervaloA = [intervalo_A_1, intervalo_A_2];
        const intervaloB = [intervalo_B_1, intervalo_B_2];


        const data_Result = await API_Interlace.post("/", {
            intervaloA: intervaloA,
	        intervaloB: intervaloB
        }).then(resp => {
            return resp.data;
        }) 

        setResult(`${data_Result.msg}`);
    }

    return(
        <div className="container-challenger-02">
            <h2>Challenger 02</h2>

            <div className='container-element-challenger-02'>
                <h3>Intervalo A</h3>
                <input id="input-intervalo-a-1" type="number" /> 
                <input id="input-intervalo-a-2" type="number" /> 
            </div>

            <div className='container-element-challenger-02'>
                <h3>Intervalo B</h3>
                <input id="input-intervalo-b-1" type="number" /> 
                <input id="input-intervalo-b-2" type="number" /> 
            </div>

            <button onClick={() => Verify()}>Submit</button>

            <h2 id="result-challenge-02">{result}</h2>
        </div>
    )
}

export default Challenger02;