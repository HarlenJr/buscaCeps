BuscaCEPS BRASIL

Projeto para buscar informações de CEPs do Brasil re retornar dados como:
CEP
Logradouro
Bairro
Cidade
Estado
Região
DDD


COMO USAR
1º Passo: Clone o repositório 
git clone https://github.com/seu-usuario/busca-cep.git
cd busca-cep

2º Passo: Instale as depêndencias
npm install

3º Passo: execute o projeto
node index.js

4º Passo: execute o index.html
No arquivo Index.html execute no navegador


EXEMPLO DE USO
Digite o CEP que deseja procurar informações 
Exemplo: 01001000

RETORNO
JSON
"cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "cidade": "São Paulo",
  "estado": "SP",
  "regiao": "Sudeste",
  "complemento": ""


    TECNOLOGIAS USADAS
Node.js
Express
HTML
CSS
JAVASCRIPT
API ViaCEP
  
