
const pesquisa = document.getElementById('pesquisa').addEventListener('click', () => {
    const resultado = document.getElementById('resultado');
    const cep = document.getElementById('cep').value;

    if (!cep) {
        alert('O campo deve ser preenchido!');
        return
    }


    const url = `https://viacep.com.br/ws/${cep}/json`
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            resultado.innerHTML = `
                <li>Bairro: ${json.bairro}</li>
                <li>Localidade: ${json.localidade}</li>
                <li>ddd: ${json.ddd}</li>
                <li>Logradouro: ${json.logradouro}</li>
                <li>UF: ${json.uf}</li>
            `
        })
})

