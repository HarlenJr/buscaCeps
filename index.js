const express = require ('express');
const axios = require('axios');
const app = express();
const router = express.Router();

app.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://viacep.com.br/ws/89224400/json/');
      console.log(response)
      
      // Retorna os dados obtidos da API
      res.json(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error.message);
      res.status(500).json({ erro: 'Erro ao buscar dados da API' });
    }
  });

app.use('/',router);
app.listen(process.env.port || 3020);

console.log('server rodando 🔥');