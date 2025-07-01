function buscaCep(){
    const input = document.getElementById('input').value.trim();

    if(!input){
        alert('Por favor, digite um CEP.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${input}/json/`)
    .then(response => {
        if(!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        if (data.erro) {
            document.getElementById('dados').innerHTML = 'CEP não encontrado.';
        }else{
            document.getElementById('dados').innerHTML =`
            <p><strong>CEP:</strong>${data.cep}</p>
            <br>
            <p><strong>Logradouro:</strong>${data.logradouro}</p>
            <br>
            <p><strong>Bairro:</strong>${data.bairro}</p>
            <br>
            <p><strong>Cidade:</strong>${data.localidade}</p>
            <br>
            <p><strong>Estado:</strong>${data.uf}</p>
            <br>
            <p><strong>Região:</strong>${data.regiao}</p>
            <br>
            <p><strong>DDD:</strong>${data.ddd}</p>
            `;
        }
    });
}
