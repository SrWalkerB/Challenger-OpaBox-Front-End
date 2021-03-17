
import { useState } from "react";
import "./style.css";

console.clear();
function Challenger(){

    const [salaN, setSalaN] = useState("");
    const [salaS, setSalaS] = useState("");

    function Sort(){

        const input_salaN_element = document.querySelector('#input-sala-n');
        const input_salaS_element = document.querySelector('#input-sala-s');

        const salaN_values = input_salaN_element.value;
        const salaS_values = input_salaS_element.value;

        let data_salaN = [];
        let data_salaS = [];

        for(let x in salaN_values){

            data_salaN.push(salaN_values[x]);
        }

        for(let x in salaS_values){
            data_salaS.push(salaS_values[x]);
        }


        console.log(data_salaN);
        console.log(data_salaS);
    }

    return (
        <div className='container-challengers'>

            <div className="challengers-elements">
                <h2>Challenger 01</h2>

                <div className="elements-input">
                    <h3>SalaN</h3>
                    <input id="input-sala-n" type="number"/>
                    <p>*Digite os numeros juntos</p>
                </div>

                <div className="elements-input">
                    <h3>SalaS</h3>
                    <input id="input-sala-s"/>
                    <p>*Digite as letras juntas</p>
                </div>
                
                <div >
                    <h3>Teste</h3>
                    <h3>Teste</h3>
                </div>

                <button onClick={() => Sort()} id="submit-challenger-01">Submit</button>

            </div>

        </div>
    )
}

export default Challenger;