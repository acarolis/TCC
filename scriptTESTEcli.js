document.getElementById('addClientBtn').addEventListener('click', function() {
    document.getElementById('addClientForm').style.display = 'block';
});

document.getElementById('submitClientBtn').addEventListener('click', function() {
    var clientName = document.getElementById('clientName').value;
    var clientPhone = document.getElementById('clientPhone').value;
    var clientEmail = document.getElementById('clientEmail').value;

    if (clientName && clientPhone && clientEmail) {
        var clientsSection = document.querySelector('.clients');
        var newClientDiv = document.createElement('div');
        newClientDiv.classList.add('client');
        newClientDiv.innerHTML = `
            <img src="customer_icon.png" alt="Ícone do Cliente">
            <h2>${clientName}</h2>
            <p>Nome: ${clientName}</p>
            <p>Telefone: ${clientPhone}</p>
            <p>Email: ${clientEmail}</p>
        `;
        clientsSection.appendChild(newClientDiv);

        // Limpa o formulário
        document.getElementById('clientName').value = '';
        document.getElementById('clientPhone').value = '';
        document.getElementById('clientEmail').value = '';

        // Esconde o formulário após adicionar o cliente
        document.getElementById('addClientForm').style.display = 'none';
    } else {
        alert('Por favor, preencha todas as informações do cliente.');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Event listener para o botão "Adicionar Cliente"
    document.getElementById("addClientBtn").addEventListener("click", function() {
        document.getElementById("addClientForm").style.display = "block"; // Mostra o formulário
    });

    // Event listener para o botão "Adicionar"
    document.getElementById("submitClientBtn").addEventListener("click", function() {
        // Obter os valores dos campos
        var name = document.getElementById("clientName").value;
        var cpf = document.getElementById("clientCPF").value;
        var address = document.getElementById("clientAddress").value;
        var phone = document.getElementById("clientPhone").value;
        var email = document.getElementById("clientEmail").value;

        // Aqui você pode fazer o que quiser com os valores obtidos, por exemplo, exibí-los na lista de clientes
        var clientInfo = "Nome: " + name + ", CPF: " + cpf + ", Endereço: " + address + ", Telefone: " + phone + ", Email: " + email;
        var clientListItem = document.createElement("li");
        clientListItem.textContent = clientInfo;
        document.querySelector(".clients").appendChild(clientListItem);

        // Limpar os campos do formulário após adicionar o cliente
        document.getElementById("clientName").value = "";
        document.getElementById("clientCPF").value = "";
        document.getElementById("clientAddress").value = "";
        document.getElementById("clientPhone").value = "";
        document.getElementById("clientEmail").value = "";

        // Esconder o formulário após adicionar o cliente
        document.getElementById("addClientForm").style.display = "none";
    });
});
