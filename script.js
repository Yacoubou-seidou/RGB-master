//les variables
const header = document.getElementById("header");
const palettes = document.querySelectorAll(".palette");
const colorRgb = document.getElementById("color-rgb");
const resetEl = document.getElementById("reset-el");
const easy = document.getElementById("easy-mode");
const hard = document.getElementById("hard-mode");
let couleur = [];
let mode = false;
//fonction principale
if (mode === false) {
  //donnees les couleurs au buttons easy et hard
  hard.style.backgroundColor = "#467eb1";
  hard.style.color = "#fdfdfc";
  easy.style.backgroundColor = "#fdfdfc";
  easy.style.color = "#467eb1";
  console.log(palettes);
  randomRgb();
  //attribut couleur au palette
  function colorAttr() {
    for (let i = 0; i < palettes.length; i++) {
      palettes[i].style.backgroundColor = `${randomRgb()}`;
      //push les couleurs dans me array
      couleur.push(palettes[i].style.backgroundColor);
    }
    //choisi la couleur a attribué au H1 depuyis le array couleur
    let i = Math.floor(Math.random() * couleur.length);
    colorRgb.innerText = couleur[i];
  }
  colorAttr();
  //evenement au click pour toutes les palettes
  palettes.forEach((Element) =>
    Element.addEventListener("click", function () {
      if (Element.style.backgroundColor === colorRgb.innerText) {
        resetEl.textContent = `Play again!`;
        header.style.backgroundColor = colorRgb.innerText;
        palettes.forEach(
          (Element) => (Element.style.backgroundColor = colorRgb.innerText)
        );
      } else if (Element.style.backgroundColor !== colorRgb.innerText) {
        Element.style.visibility = "hidden";
      }
    })
  );
  console.log(couleur);
}
// crée une couleur aléatoire
function randomRgb() {
  return ` rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
}
// reset le jeux
function reset() {
  if (mode === false) {
    location.reload();
  } else {
    palettes[0].style.visibility = "visible";
    palettes[1].style.visibility = "visible";
    palettes[2].style.visibility = "visible";
    easyMode();
  }
}
//fonction easy pour reduire les palettes
function easyMode() {
  couleur = [];
  mode = true;
  hard.style.backgroundColor = "#fdfdfc";
  hard.style.color = "#467eb1";
  easy.style.backgroundColor = "#467eb1";
  easy.style.color = "#fdfdfc";
  palettes[3].style.display = "none";
  palettes[4].style.display = "none";
  palettes[5].style.display = "none";
  console.log(palettes);
  randomRgb();
  //attribut couleur au palette
  for (let i = 0; i < 3; i++) {
    palettes[i].style.backgroundColor = `${randomRgb()}`;
    //push les couleurs dans me array
    couleur.push(palettes[i].style.backgroundColor);
  }
  //choisi la couleur a attribué au H1 depuyis le array couleur
  let i = Math.floor(Math.random() * couleur.length);
  colorRgb.innerText = couleur[i];
  console.log(couleur);
  // evenement au click pour les 3  palettes restantes
  palettes[0].addEventListener("click", function () {
    if (palettes[0].style.backgroundColor === colorRgb.innerText) {
      resetEl.textContent = `Play again!`;
      header.style.backgroundColor = colorRgb.innerText;
      palettes[0].style.backgroundColor = colorRgb.innerText;
      palettes[1].style.backgroundColor = colorRgb.innerText;
      palettes[2].style.backgroundColor = colorRgb.innerText;
    } else if (palettes[0].style.backgroundColor !== colorRgb.innerText) {
      palettes[0].style.visibility = "hidden";
    }
  });
  palettes[1].addEventListener("click", function () {
    if (palettes[1].style.backgroundColor === colorRgb.innerText) {
      resetEl.textContent = `Play again!`;
      header.style.backgroundColor = colorRgb.innerText;
      palettes[0].style.backgroundColor = colorRgb.innerText;
      palettes[1].style.backgroundColor = colorRgb.innerText;
      palettes[2].style.backgroundColor = colorRgb.innerText;
    } else if (palettes[1].style.backgroundColor !== colorRgb.innerText) {
      palettes[1].style.visibility = "hidden";
    }
  });
  palettes[2].addEventListener("click", function () {
    if (palettes[2].style.backgroundColor === colorRgb.innerText) {
      resetEl.textContent = `Play again!`;
      header.style.backgroundColor = colorRgb.innerText;
      palettes[0].style.backgroundColor = colorRgb.innerText;
      palettes[1].style.backgroundColor = colorRgb.innerText;
      palettes[2].style.backgroundColor = colorRgb.innerText;
    } else if (palettes[2].style.backgroundColor !== colorRgb.innerText) {
      palettes[2].style.visibility = "hidden";
    }
  });
}
//function hard
function hardMode() {
  location.reload();
  mode = false;
  //reaparution des palettes
  palettes[3].style.display = "flex";
  palettes[4].style.display = "flex";
  palettes[5].style.display = "flex";
}
// location.reload();
