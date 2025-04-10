const btn_pesq = document.querySelector("#btn_pesq");
const f_txtpesq = document.querySelector("#f_txtpesq");

btn_pesq.addEventListener("click", (evt) => {
    const valorpesquisa = f_txtpesq.value;

    // Validação básica
    if (valorpesquisa === "") {
        alert("Digite a pesquisa");
        f_txtpesq.focus();
        return;
    }

    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value;

    // Monta o endpoint
    const endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}`;

    // Requisição GET com tratamento de erros
    fetch(endpoint)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erro ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .then(res => {
            console.log("Resposta da API:", res);
            // Aqui você pode adicionar a lógica para mostrar os dados na interface
        })
        .catch(err => {
            console.error("Erro na requisição:", err.message);
            alert("Erro ao buscar dados. Verifique se o servidor está rodando e se a rota está correta.");
        });
});
