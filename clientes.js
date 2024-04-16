document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('clienteForm');
    const listaClientes = document.getElementById('listaClientes');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;

        // Cria um novo item de lista para o cliente
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${nome}, CPF: ${cpf}, Telefone: ${telefone}`;

        // Adiciona o item de lista à lista de clientes
        listaClientes.appendChild(listItem);

        // Limpa os campos do formulário
        form.reset();
    });
});
