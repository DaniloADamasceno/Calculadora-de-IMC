
    const formulario_IMC = document.querySelector('#formulario');             // Para a seleção do formulario
  
   formulario_IMC.addEventListener('submit', function (evento) {             
       evento.preventDefault ();                                              // para parar o envio do formulario  
       const input_Peso = evento.target.querySelector('#peso');
       const input_Altura = evento.target.querySelector('#altura');

       const peso = Number(input_Peso.value);                                 // para obter o valor do peso
       const altura = Number(input_Altura.value);                             // para obter o valor da altura 

       if (!peso) {                                                           // para se o peso for invalido a função não executar 
           Recebe_Formulario('Peso Invalido', false);
           return;
       }

       if (!altura) {                                                         // para se a altura for invalida a função não executar 
        Recebe_Formulario('Altura Invalida', false);
        return;
    }

    const imc = getImc (peso, altura);                                        // Criar uma constante de IMC 
    const nivelIMC = get_nivelIMC(imc);                                       // Criar uma constante de  Nível de IMC 

    const mensagem = `Seu IMC é ${imc} você esta com ${nivelIMC}.`;

    Recebe_Formulario(mensagem, true);                                        // Para ser Exibido o valor do Seu Imc
   });

function get_nivelIMC (imc) {                                                 // Função de nível de imc 
    const nivel =['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];           // Obesidade Grau 3 
    if (imc >= 34.9) return nivel[4];           // Obesidade Grau 2
    if (imc >= 29.9) return nivel[3];           // Obesidade Grau 1 
    if (imc >= 24.9) return nivel[2];           // Sobrepeso
    if (imc >= 18.5) return nivel[1];           // Peso normal
    if (imc < 18.5) return nivel[0];            // Abaixo do peso
}

function getImc (peso, altura) {                                               // Função de Calculo de IMC
    const imc = peso /(altura**2);
    return imc.toFixed(2);

}

function criar_Paragrafo () {                                                  // Função para criar paragrafo 
    const p = document.createElement('p');                                     // Criar um paragrafo para exibição 
    return p   
}
   function Recebe_Formulario(mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criar_Paragrafo();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado-Green');
    }else {
        p.classList.add('paragrafo-resultado-RED');
        }

   p.innerHTML = mensagem;
   resultado.appendChild(p);
   

}