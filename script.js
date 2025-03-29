/*definindo as constantes da aplicação, sendo os botões direcionado a cada página */
const cabecalho = document.querySelector("#cabecalho");
const btn_home = document.querySelector("#btn_home");
const menu = document.querySelector("#menu");
const btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const principal = document.querySelector("#principal");
/**------------------------------------------------------------- */


btn_home.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./home.html");
})

btn_novo.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./novo.html");
})

btn_pesquisar.addEventListener("click",(evt)=>{
    abrirPagina(evt.target,"./pesquisar.html");
})

btn_gestao.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./gestao.html");
})

btn_sobre.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./sobre.html");
})

function abrirPagina(el,url){
    /**adicionando a classe abaSelecionada */
    const abas = [...document.querySelectorAll(".aba")];
    /**percorrendo todos os botões e removendo o estilo de abaSelecionada de todos os botões*/
    abas.forEach((e)=>{
        e.classList.remove("abaSelecionada")
    })
    /**depois de removido, adiciono  somente o que foi selecionado */
    el.classList.add("abaSelecionada")
    /*adicionando a função da url diretamente na função */
    window.open(url, "if_principal")
}
