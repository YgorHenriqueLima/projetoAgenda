/**obtendo o back end da conexão com o banco de dados do node-red */
const btn_gravar = document.getElementById("btn_gravar");
const btn_cancelar = document.getElementById("btn_cancelar");

const f_nome = document.getElementById("f_nome");
const f_celular = document.getElementById("f_celular");
const f_email = document.getElementById("f_email");
const f_dtnasc = document.getElementById("f_dtnasc");

btn_gravar.addEventListener("click",()=>{
    /**
     * montar um json com os dados e passar esses dados para o cabeçalho 
     * */
    const dados = {
        "f_nome":f_nome.value,
        "f_celular":f_celular.value,
        "f_email":f_email.value,
        "f_dtnasc":f_dtnasc.value
    }
    
    /**cabeçalho com as informações, tendo o método do envio e a conversão dos dados para JSON */
    const cabecalho = {
        method:"POST",
        body:JSON.stringify(dados)
    }

    /**obtendo o endpoint do servidor do node-red */
    const endpoint = "http://127.0.0.1:1880/addcontatos";
    fetch(endpoint,cabecalho)
    .then(res=>{
        /**se esse resultado tiver o status como 200 então está OK*/
        if(res.status == 200){
            reset();
        }else{
            /**emitir um erro */
            alert("erro ao gravar novo contato");
        }
    })

})
/**
 * o que o botão cancelar vai fazer é limpar os cursores e focar no primeiro campo
 * 
 */
btn_cancelar.addEventListener("click",()=>{
    reset()
})

/**
 * Limpa todos os campos do formulário e posiciona o foco no campo de nome.
 *
 * Esta função é útil após o envio do formulário ou quando se deseja reiniciar o preenchimento.
 * 
 */
function reset() {
    f_nome.value = "";
    f_celular.value = "";
    f_email.value = "";
    f_dtnasc.value = "";
    f_nome.focus();
}
