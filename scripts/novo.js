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
    
    const cabecalho = {
        method:"POST",
        body:JSON.stringify(dados)
    }

    const endpoint = "http://127.0.0.1:1880/addcontatos";
    fetch(endpoint,cabecalho)
    .then(res=>{
        /**se esse resultado tiver o status como 200 então está OK*/
        if(res.status == 200){
            console.log("OK");
        }else{
            /**emitir um erro */
            alert("erro ao gravar novo contato");
        }
    })

})

btn_cancelar.addEventListener("click",()=>{

})

