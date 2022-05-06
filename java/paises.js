const texto = document.getElementById("texto");
const titulo = document.getElementById("titulo");
const imagem = document.querySelector(".sasuke");

function mudaPais(pais) {
  switch (pais) {
    case "ue":
      titulo.innerHTML = "UNIÃO EUROPEIA";
      texto.innerHTML = "Data de origem: 7 de fevereiro de 1992 <br>Lugar de origem: Maastricht, Holanda <br>Objetivo: unificação da Europa e busca da paz, <br> livre circulação, e moeda unitária  <br>Paises: 30 <br>";
      imagem.src = "img/uniao-europeia.png";
      break;
    case "parlamentos":
      titulo.innerHTML = "PARLAMENTOS";
      texto.innerHTML = "Principais organismos da União Europeia <br> Parlamento Europeu: Representa os cidadãos, toma as decisões politicas de orçamento da Europa<br> Conselho Europeu: Responsável pelas orientações e questões políticas em geral da União Europeia. <br> Conselho da União Europeia: Atua com o parlamento na tomada de decisões. <br> Comissão Europeia: Principal órgão do Poder Executivo da União Europeia";
      imagem.src = "img/uniao-europeia.png";
      break;
    case "austria":
      titulo.innerHTML = "Áustria";
      texto.innerHTML =
        "Capital: Viena;</br> Língua oficial da UE: alemão;</br> Adesão à UE: 1 de janeiro de 1995;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do Espaço Schengen desde 1 de dezembro de 1997</br> A Áustria tem 19 deputados no Parlamento Europeu. ";
      imagem.src = "img/austria.png";
      break;
    case "belgica":
      titulo.innerHTML = "Bélgica";
      texto.innerHTML =
        "Capital: Bruxelas;</br> Língua oficial da UE: neerlandês, francês e alemão;</br> Adesão à UE: 1 de janeiro de 1958;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do Espaço Schengen desde 1995</br> A Bélgica tem 21 deputados no Parlamento Europeu. ";
      imagem.src = "img/belgica.png";
      break;
    case "bulgaria":
      titulo.innerHTML = "Bulgária";
      texto.innerHTML =
        "Capital: Sófia;</br> Língua oficial da UE: búlgaro;</br> Adesão à UE: 1 de janeiro de 2007;</br> Moeda: lev búlgaro (BGN). A Bulgária comprometeu-se a adotar o euro assim que preencha as condições necessárias para o fazer;</br> Schengen: A Bulgária está atualmente em processo de adesão ao espaço Schengen;</br> A Bulgária tem 17 deputados no Parlamento Europeu. ";
      imagem.src = "img/bulgariapng.png";
      break;
    case "croacia":
      titulo.innerHTML = "Croácia";
      texto.innerHTML =
        "Capital Zagrebe;</br> Língua oficial da UE: croata;</br> Adesão à UE: 1 de julho de 2013;</br> Moeda: kuna croata (HRK) A Croácia comprometeu-se a adotar o euro assim que preencha as condições necessárias para o fazer;</br> Schengen: A Croácia não é membro do espaço Schengen;</br> A Croácia tem 12 deputados no Parlamento Europeu. ";
      imagem.src = "img/croacia.png";
      break;
    case "chipre":
      titulo.innerHTML = "Chipre";
      texto.innerHTML =
        "Capital: Nicósia;</br> Língua oficial da UE: grego;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 2008;</br> Schengen: Chipre está atualmente em processo de adesão ao espaço Schengen;</br> O Chipre tem 6 deputados no Parlamento Europeu. ";
      imagem.src = "img/chipre.png";
      break;
    case "repTcheca":
      titulo.innerHTML = "República Tcheca";
      texto.innerHTML =
        "Capital: Praga;</br> Língua oficial da UE: tcheco;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: Coroa checa (CZK) A Reública Tcheca está atualmente preparando-se para a adoção do euro;</br> Schengen: Membro do Espaço Schengen desde 21 de dezembro de 2007;</br> A República Tcheca tem 21 deputados no Parlamento Europeu. ";
      imagem.src = "img/reptcheca.png";
      break;
    case "dinamarca":
      titulo.innerHTML = "Dinamarca";
      texto.innerHTML =
        "Capital: Copenhage;</br> Língua oficial da UE: dinamarquês;</br> Adesão à UE: 1 de janeiro de 1973;</br> Moeda: coroa dinamarquesa (DKK) A Dinamarca negociou uma cláusula de não participação no euro, pelo que não é obrigada a adotá-lo;</br> Schengen: Membro do espaço Schengen desde 25 de março de 2001;</br> A Dinamarca tem 12 deputados no Parlamento Europeu. ";
      imagem.src = "img/dinamarca.png";
      break;
    case "estonia":
      titulo.innerHTML = "Estônia";
      texto.innerHTML =
        "Capital: Talinn</br> Língua oficial da UE: estônio;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 2011;</br> Schengen: Membro do espaço Schengen desde 21 de dezembro de 2007;</br> A Estônia tem 6 deputados no Parlamento Europeu. ";
      imagem.src = "img/estonia.png";
      break;
    case "finlandia":
      titulo.innerHTML = "Finlândia";
      texto.innerHTML =
        "Capital: Helsínque;</br> Língua oficial da UE: finlandês, sueco;</br> Adesão à UE: 1 de janeiro de 1995;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do espaço Schengen desde 25 de março de 2001;</br> A Finlândia tem 13 deputados no Parlamento Europeu. ";
      imagem.src = "img/finlandia.png";
      break;
    case "franca":
      titulo.innerHTML = "França";
      texto.innerHTML =
        "Capital: Paris;</br> Língua oficial da UE: francês;</br> Adesão à UE: 1 de janeiro de 1958;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do Espaço Schengen desde 26 de março de 1995;</br> A França tem 74 deputados no Parlamento Europeu. ";
      imagem.src = "img/franca.png";
      break;
    case "alemanha":
      titulo.innerHTML = "Alemanha";
      texto.innerHTML =
        "Capital: Berlim;</br> Língua oficial da UE: alemão;</br> Adesão à UE: 1 de janeiro de 1958;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do Espaço Schengen desde 26 de março de 1995;</br> A Alemanha tem 96 deputados no Parlamento Europeu. ";
      imagem.src = "img/alemanha.png";
      break;
    case "grecia":
      titulo.innerHTML = "Grécia";
      texto.innerHTML =
        "Capital: Atenas;</br> Língua oficial da UE: grego;</br> Adesão à UE: 1 de janeiro de 1981;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 2001;</br> Schengen: Membro do espaço Schengen desde 1 de janeiro de 2000;</br> A Grécia tem 21 deputados no Parlamento Europeu. ";
      imagem.src = "img/grecia.png";
      break;
    case "hungaria":
      titulo.innerHTML = "Hungria";
      texto.innerHTML =
        "Capital: Budapeste;</br> Língua oficial da UE: húngaro;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: forinte húngaro (HUF). A Hungria está atualmente a preparar a adoção do euro;</br> Schengen: Membro do espaço Schengen desde 21 de dezembro de 2007;</br> A Hungria tem 21 deputados no Parlamento Europeu. ";
      imagem.src = "img/hungria.png";
      break;
    case "irlanda":
      titulo.innerHTML = "Irlanda";
      texto.innerHTML =
        "Capital: Dublin;</br> Língua oficial da UE: gaélico, inglês;</br> Adesão à UE: 1 de janeiro de 1973;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: A Irlanda negociou uma cláusula de não participação no espaço Schengen;</br> A Irlanda tem 11 deputados no Parlamento Europeu. ";
      imagem.src = "img/irlanda.png";
      break;
    case "italia":
      titulo.innerHTML = "Itália";
      texto.innerHTML =
        "Capital: Roma;</br> Língua oficial da UE: italiano;</br> Adesão à UE: 1 de janeiro de 1958;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do espaço Schengen desde 26 de outubro de 1997;</br> A Itália tem 73 deputados no Parlamento Europeu. ";
      imagem.src = "img/italia.png";
      break;
    case "letonia":
      titulo.innerHTML = "Letônia";
      texto.innerHTML =
        "Capital: Riga;</br> Língua oficial da UE: letão;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 2014;</br> Schengen: Membro do espaço Schengen desde 21 de dezembro de 2007;</br> A Letônia tem 8 deputados no Parlamento Europeu. ";
      imagem.src = "img/letonia.png";
      break;
    case "lituania":
      titulo.innerHTML = "Lituânia";
      texto.innerHTML =
        "Capital: Vílnius;</br> Língua oficial da UE: lituano;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 2014;</br> Schengen: Membro do espaço Schengen desde 21 de dezembro de 2007;</br> A Lituânia tem 11 deputados no Parlamento Europeu. ";
      imagem.src = "img/lituania.png";
      break;
    case "luxemburgo":
      titulo.innerHTML = "Luxemburgo";
      texto.innerHTML =
        "Capital: Luxemburgo;</br> Língua oficial da UE:francês, alemão;</br> Adesão à UE: 1 de janeiro de 1958;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do espaço Schengen desde 26 de março de 1995;</br> Luxemburgo tem 6 deputados no Parlamento Europeu. ";
      imagem.src = "img/luxemburgo.png";
      break;
    case "malta":
      titulo.innerHTML = "Malta";
      texto.innerHTML =
        "Capital: Valeta;</br> Língua oficial da UE: maltês, inglês;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 2008;</br> Schengen: Membro do Espaço Schengen desde 21 de dezembro de 2007;</br> Malta tem 6 deputados no Parlamento Europeu. ";
      imagem.src = "img/malta.png";
      break;
    case "paisesBaixos":
      titulo.innerHTML = "Países Baixos";
      texto.innerHTML =
        "Capital: Amesterdã;</br> Língua oficial da UE: neerlandês;</br> Adesão à UE: 1 de janeiro de 1958;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do espaço Schengen desde 26 de março de 1995;</br> Os Países Baixos têm 26 deputados no Parlamento Europeu. ";
      imagem.src = "img/paisesbaixos.png";
      break;
    case "polonia":
      titulo.innerHTML = "Polônia";
      texto.innerHTML =
        "Capital: Varsóvia;</br> Língua oficial da UE: polônes;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: zlóti polaco (PLN). A Polónia está atualmente a preparar a adoção do euro;</br> Schengen: Membro do Espaço Schengen desde 21 de dezembro de 2007;</br> A Polônia tem 51 deputados no Parlamento Europeu. ";
      imagem.src = "img/polonia.png";
      break;
    case "portugal":
      titulo.innerText = "Portugal";
      texto.innerHTML =
        "Capital: Lisboa;</br> Língua oficial da UE: português;</br> Adesão à UE: 1 de janeiro de 1986;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do espaço Schengen desde 26 de março de 1995;</br> Portugal tem 21 deputados no Parlamento Europeu. ";
      imagem.src = "img/portugal.png";
      break;
    case "romenia":
      titulo.innerHTML = "Romênia";
      texto.innerHTML =
        "Capital: Bucareste;</br> Língua oficial da UE: romeno;</br> Adesão à UE: 1 de janeiro de 2007;</br> Moeda: Leu romeno (RON) A Roménia comprometeu-se a adotar o euro assim que preencha as condições necessárias para isso;</br>Schengen: A Roménia encontra-se atualmente em processo de adesão ao espaço Schengen;</br> A Romênia tem 32 deputados no Parlamento Europeu. ";
      imagem.src = "img/romania.png";
      break;
    case "eslovaquia":
      titulo.innerHTML = "Eslováquia";
      texto.innerHTML =
        "Capital: Bratislava;</br> Língua oficial da UE: eslovaco;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 2009;</br> Schengen: Membro do espaço Schengen desde 21 de dezembro de 2007;</br> A Eslováquia tem 13 deputados no Parlamento Europeu. ";
      imagem.src = "img/eslovaquia.png";
      break;
    case "eslovenia":
      titulo.innerHTML = "Eslovênia";
      texto.innerHTML =
        "Capital: Liubliana;</br> Língua oficial da UE: esloveno;</br> Adesão à UE: 1 de maio de 2004;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 2007;</br> Schengen: Membro do espaço Schengen desde 21 de dezembro de 2007;</br> A Eslovênia tem 8 deputados no Parlamento Europeu. ";
      imagem.src = "img/eslovenia.png";
      break;
    case "espanha":
      titulo.innerHTML = "Espanha";
      texto.innerHTML =
        "Capital: Madrid;</br> Língua oficial da UE: espanhol;</br> Adesão à UE: 1 de janeiro de 1986;</br> Moeda: euro. Membro da zona euro desde 1 de janeiro de 1999;</br> Schengen: Membro do Espaço Schengen desde 26 de março de 1995;</br> A Espanha tem 51 deputados no Parlamento Europeu. ";
      imagem.src = "img/espanha.png";
      break;
    case "suecia":
      titulo.innerHTML = "Suécia";
      texto.innerHTML =
        "Capital: Estocolmo;</br> Língua oficial da UE: sueco;</br> Adesão à UE: 1 de janeiro de 1995;</br> Moeda: A Suécia comprometeu-se a adotar o euro assim que preencha as condições necessárias para o fazer;</br> Schengen: Membro do espaço Schengen desde 25 de março de 2001;</br> A Suécia tem 20 deputados no Parlamento Europeu. ";
      imagem.src = "img/suecia.png";
      break;
    case "reinoUnido":
      titulo.innerHTML = "Reino Unido";
      texto.innerHTML =
        "O Reino Unido atualmente não é um membro da União Europeia.</br> Capital: Londres;</br> Língua oficial da UE: inglês;</br> Adesão à UE: 1 de janeiro de 1973 - Saída em 31 de janeiro de 2020;</br> Moeda: Libra Esterlina;</br> Brexit: O Conselho Europeu aprovou o acordo. Em 9 de janeiro de 2020, os parlamentares britânicos deram sua aprovação final ao texto.";
      imagem.src = "img/reinounido.png";
      break;
  }
}


