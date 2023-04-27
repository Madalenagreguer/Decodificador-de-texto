var btnCriptografar = document.querySelector('#btn-criptografar');
var btnDescriptografar = document.querySelector('#btn-descriptografar');
var btnCopiar = document.querySelector('#btn-copiar');
var elementosOcultos = document.querySelectorAll('.ocultar');
var selecionarTextArea = document.querySelector('#entrada-texto');
var entradaOperacao = '';
var saidaOperacao = document.querySelector('#saida-operacao');

// Validador de texto
selecionarTextArea.addEventListener('input', function () {
  var textoValidado = selecionarTextArea.value
    .toLowerCase()
    .replace(/[^a-z\s]/g, '');
  selecionarTextArea.value = textoValidado;
});

// Função do botão "Criptografar"
btnCriptografar.onclick = function () {
  if (selecionarTextArea.value != '') {
    for (i = 0; i < elementosOcultos.length; i++) {
      elementosOcultos[i].style.display = 'none';
    }

    var boxSaida = document.querySelector('#box-saida');
    boxSaida.style.justifyContent = 'space-between';
    boxSaida.style.textAlign = 'start';
    btnCopiar.style.display = 'flex';
    btnCopiar.textContent = 'Copiar';

    entradaOperacao = selecionarTextArea.value;

    entradaOperacao = entradaOperacao
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');

    saidaOperacao.innerHTML = entradaOperacao;
  } else {
    window.alert('Insira uma mensagem no campo para criptografar');
  }
};

// Função do botão "Descriptografar"
btnDescriptografar.onclick = function () {
  if (selecionarTextArea.value != '') {
    for (i = 0; i < elementosOcultos.length; i++) {
      elementosOcultos[i].style.display = 'none';
    }

    var boxSaida = document.querySelector('#box-saida');
    boxSaida.style.justifyContent = 'space-between';
    boxSaida.style.textAlign = 'start';
    btnCopiar.style.display = 'flex';
    btnCopiar.textContent = 'Copiar';

    entradaOperacao = selecionarTextArea.value;

    entradaOperacao = entradaOperacao
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

    saidaOperacao.innerHTML = entradaOperacao;
  } else {
    window.alert('Insira uma mensagem no campo para descriptografar');
  }
};

btnCopiar.onclick = function () {
  navigator.clipboard.writeText(entradaOperacao);
  btnCopiar.textContent = 'Copiado';
};
