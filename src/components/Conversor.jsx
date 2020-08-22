import React, { useState } from 'react';

const axios = require('axios');

const Conversor = () => {
  const [moeda1, setMoeda1] = useState('');
  const [moeda2, setMoeda2] = useState('');
  const [valor, setValor] = useState(1);
  const [valorConvertido, setValorConvertido] = useState(0);

  const URL = `https://api.ratesapi.io/api/latest?base=${moeda1}&symbols=${moeda2}`;
  const getAPI = () => {
    axios.get(URL).then((resp) => setValorConvertido(resp.data.rates[moeda2]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (moeda1 === moeda2) alert('Essa conversão não é possível');
    getAPI();
  };

  return (
    <form className="container d-flex flex-column" onSubmit={(e) => handleSubmit(e)}>
      <h2>Conversor de moedas</h2>

      <div className="dropdown">
        <label htmlFor="moeda1">Converta</label>
        <select value={moeda1} id="moeda1" onChange={(e) => setMoeda1(e.target.value)}>
          <option value="">Escolha</option>
          <option value="USD">Dólar - US$</option>
          <option value="EUR">Euro - &#8364;</option>
          <option value="BRL">Real - R$</option>
          <option value="CAD">Dólar Canadense - CA$</option>
        </select>
      </div>

      <div className="form-group">
        <label className="mr-2" htmlFor="inputValue">
          Valor a ser convertido
        </label>
        <input
          value={valor}
          type="number"
          id="inputValue"
          onChange={(e) => setValor(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="moeda2">Para</label>
        <select name="" id="" onChange={(e) => setMoeda2(e.target.value)}>
          <option value="">Escolha</option>
          <option value="USD">Dólar - US$</option>
          <option value="EUR">Euro - &#8364;</option>
          <option value="BRL">Real - R$</option>
          <option value="CAD">Dólar Canadense - CA$</option>
        </select>
      </div>

      <div>
        <button className="btn btn-primary mt-4" type="submit">
          Converter
        </button>
      </div>

      <h3>Valor convertido:</h3>
      <h3>
        {(valorConvertido * valor).toLocaleString('pt-br', {
          style: 'currency',
          currency: `${moeda2 || 'BRL'}`,
        })}
      </h3>
    </form>
  );
};

export default Conversor;
