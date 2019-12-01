//Arquivo JS para alteração do tamanho da fonte.

/**
 * Pegando o elemento body do DOM para fazer alterações no CSS.
 */
var body = document.getElementById('conteudo')
var toggle_Contraste = document.getElementById('link_Contraste')

/**
* Função para aumentar em 5 o tamanho da fonte.
*/
function aumentarFonte() {
    let font = document.getElementById('conteudo_body').style.fontSize;

    font = font.replace('px', '');

    if (font == "") {
        document.getElementById('conteudo_body').style.fontSize = "17px";
    } else {
        document.getElementById('conteudo_body').style.fontSize = (parseInt(font) + 5) + "px";
    }
}

function fontePadrao(){
    document.getElementById('conteudo_body').style.fontSize = (parseInt(16) + "px")
}

/**
* Função para diminuir em 5 o tamanho da fonte.
*/
function diminuirFonte() {
    let font = document.getElementById('conteudo_body').style.fontSize;
    font = font.replace("px", "");

    if (font == "") {
        document.getElementById('conteudo_body').style.fontSize = "11px";
    } else {
        document.getElementById('conteudo_body').style.fontSize = (parseInt(font) - 5) + "px";
    }
}

/**
 * Função para inserir e retirar o arquivo CSS para o auto contraste
 */
function mudarContraste() {
    
    let sinopse = document.getElementById('sinopse_Detail')
    
    if (toggle_Contraste.getAttribute("href") === "") {
        body.setAttribute('id', '')
        toggle_Contraste.setAttribute("href", "auto_contraste.css")
        try{
            sinopse.classList.remove('sinopse_Detail')
        }catch(err){
        }
    } else {
        body.setAttribute('id', 'conteudo')
        toggle_Contraste.setAttribute("href", "")
        try{
            sinopse.classList.add('sinopse_Detail')
        }catch(err){
        }
    }
}