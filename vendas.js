document.addEventListener("DOMContentLoaded", function() {
    const salesForm = document.getElementById("sales-form");
    const salesList = document.getElementById("sales-items");

    salesForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const productInput = document.getElementById("product");
        const quantityInput = document.getElementById("quantity");

        const product = productInput.value.trim();
        const quantity = parseInt(quantityInput.value);

        if (!product || isNaN(quantity) || quantity <= 0) {
            alert("Por favor, preencha o produto e a quantidade corretamente.");
            return;
        }

        const today = new Date().toLocaleDateString();
        const listItem = document.createElement("li");
        listItem.className = "sales-item";
        listItem.textContent = `${quantity}x ${product} - ${today}`;

        salesList.appendChild(listItem);

        // Limpar campos do formulário após adicionar venda
        salesForm.reset();

        // Scroll para o final da lista de vendas
        salesList.scrollTop = salesList.scrollHeight;
    });
});
