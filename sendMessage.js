// criando uma função que gera o link e redireciona o cliente:
function generateLink(phone, message) {
  /*
   * formata uma string no formato de URL substituindo as variáveis
   * pelos seus respectivos valores e guarda tudo em uma constante
   * chamada "link":
  */
  const link = `https://wa.me/5585${phone}?text=${message}`;

  // abre link gerado em uma nova janela:
  window.open(link, "_blank");
}


// criando uma função que retorna o valor do input do telefone:
function getPhone() {
  // procura um elemento HTML com o id = "inputPhone" e a armazena:
  const phoneInputElement = document.getElementById("inputPhone");
  // guarda o valor do input em uma constante:
  const phone = phoneInputElement.value;

  // retorna o valor adquirido:
  return phone;
}


// faz praticamente a mesma coisa que a função anterior, mas retorna a mensagem:
function getMessage() {
  const messageInputElement = document.getElementById("inputMessage");
  const message = messageInputElement.value;

  return message;
}


// essa é a função que é chamada pelo botão do HTML que definimos no "index.html":
function sendMessage() {
  // armazena os valores retornados das funções que criamos:
  const phone = getPhone();
  const message = getMessage();

  // e por fim, manda a mensagem ao telefone inseridos nos inputs:
  generateLink(phone, message);
}
