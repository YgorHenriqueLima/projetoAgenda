const btn_pesq = document.getElementById("btn_pesq");
const f_txtpesq = document.querySelector("#f_txtpesq");

btn_pesq.addEventListener("click",(evt)=>{
    /**FAZENDO UMA VALIDAÇÃO DE ERRO BÁSICO */
    if(f_txtpesq.value == ""){
        alert("digite a pesquisa")
        f_txtpesq.focus()
        return
    }
    console.log(document.getElementsByName("f_pesq").value)
})