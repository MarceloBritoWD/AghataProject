// funçao que calcula o turno diario
function calculaTurno() {
  var data = new Date();
  var hora = data.getHours();

  if (hora >= 0 && hora < 12) {
      return turno = 'morning';
  }
  else if (hora >= 12 && hora < 18) {
      return turno = 'afternoon';
  }
  else {
      return turno = 'night';
  };
};





cont = 0
window.addEventListener('WebComponentsReady', function(e) {
  var form = document.querySelector('#recognition-form'),
      input = document.querySelector('#recognition-input'),
      element = document.querySelector('#recognition-element');

  
  element.start();
  aghata = document.querySelector('#player-element');


  // recognition.onend     = function() {
  //   element.start();
  // };

  // element.addEventListener('onend', function(e) {  
  //   element.start();
  // };

  element.addEventListener('result', function(e) {  
    console.log(e.detail.results[cont][0])
    input.textContent = e.detail.results[cont][0].transcript; //com este script ela fica lendo repetidamente apenas o primeiro texto recebido (falado)

    input.textContent = input.textContent.toLowerCase() //deixa minusculo


    cont++


    // isto limpa os espaço no inicio da frase (atrelar a uma funçao)
    // lembrar tambem de colocar a string toda em minuscula.

    limpaString = input.textContent;
    console.log(limpaString)

    if (limpaString.charAt(0) == " "){ //se tiver espaço no inico da string ele substitui por nada.
      limpaString = limpaString.slice(1);
      input.textContent = limpaString
    }


                             

    if (input.textContent == 'que horas são') {
       var data = new Date();
       var hora = data.getHours();
       var min = data.getUTCMinutes();

       horas = 'Sir, its ' + hora + ' Hours and ' + min + ' minutes';


       aghata.setAttribute('text', horas)
       aghata.speak();
       

       aghata.addEventListener('end', function(){
        aghata.setAttribute('text', '')
        input.textContent = '';
      
        // input.value = '';
       });

       // e.detail.result = '';
    }

    else if (input.textContent == 'salve na agenda') {
       var data = new Date();
       var hora = data.getHours();
       var min = data.getUTCMinutes();

       resposta = 'What?';


       aghata.setAttribute('text', resposta)
       aghata.speak();
       

       aghata.addEventListener('end', function(){
        aghata.setAttribute('text', '')
        input.textContent = '';
      
        // input.value = '';
       });

       // e.detail.result = '';
    }



    else if (input.textContent == 'ágata') {
        calculaTurno();

        resposta = 'Hi sir, Good ' + turno;

        aghata.setAttribute('text', resposta)
        aghata.speak();

        aghata.addEventListener('end', function(){
          aghata.setAttribute('text', '')
          input.textContent = '';
        
          // input.value = '';
        });
    }


    else if (input.textContent == 'quem é você') {
        resposta = 'Hi, my name is Ághata, i am a new feature criated by Marcelo Brito'

        aghata.setAttribute('text', resposta)
        aghata.speak();


         aghata.addEventListener('end', function(){
          aghata.setAttribute('text', '')
          input.textContent = '';
        
          // input.value = '';
        });
    }


    // else if (input.textContent.indexOf('Eu quero imagens')) {
    //     pesquisaImagem(input.textContent);

    //     resposta = 'Alright sir, showing results of images in a new tab'
    //     aghata.setAttribute('text', resposta)
    //     aghata.speak();
    // }




    //ISTO EST´A BUGANDO TODO O RESTO DAS PESQUISAS, SE EU FALAR ALGO QUE NAO ESTA ACIMA DESTE IF, ELE PESQUISA.


    else if (input.textContent == 'pode fechar' || input.textContent == 'fechar') {
        resposta = 'Sure'
        aghata.setAttribute('text', resposta)
        aghata.speak();

        setInterval(function(){janela.close(); }, 1000);

        


         aghata.addEventListener('end', function(){
          aghata.setAttribute('text', '')
          input.textContent = '';
        });
    }


    else if (input.textContent.indexOf('Procure por')) {
        novaPalavra = input.textContent
        novaPalavra.replace('Procure por', '');

        if (novaPalavra) {
          janela = window.open('https://www.google.com.br/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=' + String(novaPalavra), '_blank');
        };

        resposta = 'Alright sir, showing results in a new tab'
        aghata.setAttribute('text', resposta)
        aghata.speak();





        aghata.addEventListener('end', function(){
          aghata.setAttribute('text', '')
          input.textContent = '';

        });
    }



    else if (input.textContent == 'quem sou eu') {
        resposta = 'Your name is Marcelo Brito, You have 21 years. You are a computer programer student.'
        aghata.setAttribute('text', resposta)
        aghata.speak();

        aghata.addEventListener('end', function(){
          aghata.setAttribute('text', '')
          input.textContent = '';
        
          // input.value = '';
        });

    }


    else {                       
        error = 'Sir, i dont understand!'

        aghata.setAttribute('text', error)
        aghata.speak();

         aghata.addEventListener('end', function(){
          aghata.setAttribute('text', '')
          input.textContent = '';
        
          // input.value = '';
        });

    };

});
});

// Funcoes de pesquisa estao bugadas, resolver depois


// function pesquisaComum (gatilho) {
//   window.open('https://www.google.com.br/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=' + gatilho, '_blank');
// };

// function pesquisaImagem (gatilho) {
//   window.open('https://www.google.com.br/search?q=' + gatilho + '&espv=2&biw=1863&bih=995&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiQ49vNlq3KAhUIvZAKHUihAekQ_AUIBigB', '_blank');
// };