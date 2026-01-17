const containerCEP = document.getElementById('ContainerCEP');
const searchInput = document.getElementById("searchValue");
const searchButton = document.getElementById("searchBtn");
searchButton.addEventListener('click', async () => {
    const searchValue = searchInput.value;
    if (!searchValue || searchValue.length !== 8) {
        alert('Por favor, insira um CEP válido com 8 digitos!');
        return;
    }
    try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${searchValue}`);
        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        const cep = await response.json();
        displayResults(cep);
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        alert('Não foi possível realizar a busca.');
    }
});
function displayResults(cep) {
    containerCEP.innerHTML = '';
    if (!cep || cep.error) {
        containerCEP.innerHTML = '<p>CEP não encontrado.</p>';
        return;
    }
    const containerItem = document.createElement('div');
    containerItem.innerHTML = `
        <p><strong>Estado:</strong> ${cep.state}</p>
        <p><strong>Cidade:</strong> ${cep.city}</p>
        <p><strong>Bairro:</strong> ${cep.neighborhood}</p>
        `;
    containerCEP.appendChild(containerItem);
}