import React, { useState } from 'react';

const axios = require('axios');

const Conversor = () => {
  const [moeda1, setMoeda1] = useState(0);
  const [moeda2, setMoeda2] = useState(0);
  const [valor, setValor] = useState('');

  const getAPI = () => {
    axios.get(URL).then((resp) => setMoeda2(resp));
  };
  console.log('valor digitado no input:', valor, moeda1);

  const handleSubmit = (e) => {
    e.preventDefault();
    getAPI();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Conversor de moedas</h2>

      <h4>Moeda 1</h4>
      <select name="" id="" onChange={(e) => setMoeda1(e.target.value)}>
        <option value="">Escolha</option>
        <option value="USD">Dolár</option>
        <option value="EUR">Euro</option>
        <option value="BRL">Real</option>
      </select>

      <label htmlFor="">Valor a ser convertido</label>
      <input type="number" onChange={(e) => setValor(e.target.value)} />

      <h4>Moeda 2</h4>
      <select name="" id="">
        <option value="">Escolha</option>
        <option value="">Dolár</option>
        <option value="EUR">Euro</option>
        <option value="">Real</option>
      </select>

      <button type="submit">Converter</button>

      <h3>Valor convertido:</h3>
      <h3>{moeda2}</h3>
    </form>
  );
};

export default Conversor;
