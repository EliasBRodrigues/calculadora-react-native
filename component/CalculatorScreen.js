import './style/CalculatorStyle.css'

import React, { useState } from 'react'

const CalculatorScreen = () => {
    const [numb, setNumb] = useState('');
    const [number, setNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const calculator = (e) => {
        e.preventDefault();
        
        let result = 0;
        let num1 = parseFloat(numb);
        let num2 = parseFloat(number);
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
           
        }
        setResult(result);
    }
    return (
        <div className='calculator-container'>
            <h1>Calculadora</h1>
            <h2 style={{ background: 'gray' }}>Resultado: {result}</h2>
            <form onSubmit={calculator} className='calculator-form'>
                <input
                    type='number'
                    value={numb}
                    onChange={(e) => setNumb(e.target.value)}
                    placeholder='Primeiro número'
                     className='input-field'
                />
                <input
                    type='text'
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                    placeholder='Operador (+, -, *, /)'
                    className='input-field'
                />
                <input
                    type='number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Segundo número'
                     className='input-field'
                />
                <input type='submit' value="Calcular" className='submit-button'/>
            </form>
        </div>
    );
}

export default CalculatorScreen
