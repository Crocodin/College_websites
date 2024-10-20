const cod_cuvant = ["0", "0","0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"];

const curente = ["modernism", "postmodernism", "neomodernism", "clasicism", "romantism", "simbolism", "traditionalism", "realism"];

const cuvinte_corecte = ["MODERNISM", "IONIC", "ANTICALOFILIE", "INGAMBAMENT", "ESTETICA URATULUI", "ARTA POETICA", "VERS LIBER", "RIMA ALBA", "METAFORA", "CUNOASTERE", "INCREAT", "CREATIE", "CITADIN", "INTELECTUALITATE", "HOMODIEGETIC", "SUBIECTIV", "MEMORIE INVOLUNTARA", "FLUXUL CONSTIINTEI", "MONOLOG INTERIOR", "CONFLICT INTERIOR", "TUDOR ARGHEZI", "LUCIAN BLAGA", "CAMIL PETRESCU", "MIRCEA ELIADE", "TESTAMENT", "ULTIMA NOAPTE", "FILOSOFIE", "MATEMATICA", "STROFE INEGALE", "VIATA", "IUBIRE", "MOARTE", "ERMETISM", "RAZBOI", "POSTMODERNISM", "IRONIE", "ALUZIE", "AMBIGUITATE", "MIRCEA CARTARESCU", "MIRCEA NEDELCIU", "POSTBELIC", "DEMITIZAREA TEMELOR", "LUDIC", "SIMONA POPESCU", "NEOMODERNISM", "IMAGINI INSOLITE","METAFORE", "ASTROFIC", "CLASICISM", "RATIUNE", "SIMETRIE", "ECHILIBRU", "ARMONIE", "STIL SIMPLU", "EROI IDEALI", "PERSONAJE MODEL", "DOMINANTA MORALA", "IMN", "ODA", "SONET", "TRAGEDIE", "POEM EPIC", "ION LUCA CARAGIALE", "ION BUDAI DELEANU", "FRANTA", "HETERODIEGETIC", "OBIECTIV", "VERIDIC", "VERIDICITATE", "CONCIZIE", "IDILA", "FABULA", "SATIRA", "COSTACHE NEGRUZZI", "POETII VACARESTI", "CARACTER GNOMIC", "ROMATISM", "SENSIBILITATE", "IMAGINAR POETIC", "NATURA", "IUBIRE", "TIMP", "GENIU", "ISTORIE", "FOLCLOR", "MIT", "MELANCOLIE", "TRISTETE", "NOSTALGIE", "ANTITEZA", "TITAN", "DEMON", "VISATOR", "SENTIMENTAL", "INGER", "COSMIC", "EXOTIC", "FANTASTIC", "FABULOS", "MIHAI EMINESCU", "VASILE ALECSANDRI", "EUROPA", "ONIRIC", "ARTHUR SCHOPENHAUER", "IMAGINATIE", "SUBIECTIVITATE", "CONTRA CLASICISM", "MISTER", "TRECUT", "AMESTECUL GENURILOR", "EV MEDIU", "ANTINOMIE", "VICTORIA PASIUNII", "LIMBAJ POPULAR", "LIMBAJ ARHAIC", "MEDITATIE", "ELEGIE", "LEGENDA", "BALADA", "SIMBOLISM", "SPIRIT NECROMATIC", "SIMBOL", "SUGESTIE", "REFREN", "LAITMOTIV", "NEVROZA", "DEPRESIE", "ANGOASA", "SPLEEN", "SPAIMA", "DISPERARE", "OBOSEALA PSIHICA", "ORAS SUFOCANT", "NATURA APOCALIPTICA", "SINESTEZIE", "GEORGE BACOVIA", "ION MINULESCU", "MUZICALITATE", "PLUMB", "PARC", "STRAZI", "ORAS", "ABATOR", "CLAUSTRARE", "IZOLARE", "MONOTONIE", "DOLIU", "URAT", "PLICTIS", "STARE CREPUSCULARA", "TRADITIONALISM", "SATUL ROMANESC", "DIVIN", "RELIGIE", "SACRIFICIU", "PIERDEREA VALORILOR", "OM-PAMANT", "ION PILLAT", "VASILE VOICULESCU", "CADRU MONOGRAFIC", "REVISTA GANDIREA", "TRADITIE", "OBICEI", "PREOT", "CIOBAN", "HAIDUC", "REGISTRU ARHAIC", "REGISTRU POPULAR", "REGIONALISME", "REALISM", "SAT", "PAMANT", "IUBIRE", "AVARITIE", "IMBOGATIRE","PATIMA BANILOR", "VERIDICITATE", "SIMETRIE", "CARACTER MONOGRAFIC", "PSIHOLOGIA EROILOR", "CATEGORIE SOCIALA", "HETERODIEGETIC", "OMNISCIENT", "OMNIPREZENT", "FOCALIZARE ZERO", "LIVIU REBREANU", "GEORGE CALINESCU", "IOAN SLAVICI", "SOBRU", "CONCIS", "TIPOLOGIE UMANA", "VEROSIMIL", "MORAV", "BALZAC", "STENDHAL", "ANALIZA PSIHOLOGICA", "STIL IMPERSONAL", "ROMAN", "SCHITA", "NUVELA", "COMEDIE", "NATURALISM", "ARMONIE", "MIMESIS", "DORIC"];

let variabila_corecta;
let lungime_maxim = 19;

function indexONtime() {
  let currentDate = new Date()
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  let year = currentDate.getFullYear();
  variabila_corecta = (day + month + year) % cuvinte_corecte.length;  
}
indexONtime();


let divs = document.querySelectorAll('.column')
var userInput = document.getElementById("text_search")
let matrix = []
let colors = ["#65B741", "#FFB534", "#FA7070"]

for(let i = 0; i < divs.length; ++i) {
  matrix[i] = divs[i].querySelectorAll('.wordle_box')
}

let guesses = 0

function capitalizeInput() {
  userInput.value = userInput.value.toUpperCase()
}

function handleKeyPress(event) {
  if(event.keyCode === 13) processInput()
}

function is_corect(litera, valoare) {
  if(cuvinte_corecte[variabila_corecta][valoare] == litera) return 0;
  else {
    for(var i = 0; i < cuvinte_corecte[variabila_corecta].length; ++i)
      if(cuvinte_corecte[variabila_corecta][i] == litera)  return 1;
  }
  return 2;
}

function endgame() {
  userInput.value = ''
  let body = document.getElementById('endgame');
  body.innerHTML = `
    <div class="blurry_back">
      <div class="endgame_screan">
        <h1> "${cuvinte_corecte[variabila_corecta]}" </h1>
        <p>
          Întoarce-te în firecre zi pentru un nou cuvât. Dacă vrei să continui să înveti apasă pe butonul "ÎNVAȚĂ". :D
        </p>
        <div class="continue_button"><a href="./curente/${curente[cod_cuvant[variabila_corecta]]}.html">ÎNVAȚĂ</a></div>
        <p style="font-size: small; margin-top: 30px;"> Atestat realizat de <i>Codrin Parmac & Aida Maxim</i> </p>
      </div>
    </div>
  `
}

function to_big() {
  userInput.value = ''
}

function processInput() {
  console.log(cuvinte_corecte[variabila_corecta]);
  if(userInput.value.length > lungime_maxim - 1) return to_big()
  if(userInput.value.length < lungime_maxim) {
    if(cuvinte_corecte[variabila_corecta].length < lungime_maxim) {
      var i = userInput.value.length
      for(; i < cuvinte_corecte[variabila_corecta].length; ++i) {
        if(matrix[guesses][i]) matrix[guesses][i].style.backgroundColor = colors[1]
      }
      for(; i < lungime_maxim; ++i) {
        if(matrix[guesses][i]) matrix[guesses][i].style.backgroundColor = colors[0]
      }
    }

    for(let i = 0; i < userInput.value.length; ++i) {
      matrix[guesses][i].innerHTML = `
        <div class="flip-container-back" style="background-color: ${colors[is_corect(userInput.value[i], i)]}">
          ${userInput.value[i]}
        </div>
      `
      matrix[guesses][i].classList.add('flip')
    }

    ++guesses
    if(userInput.value === cuvinte_corecte[variabila_corecta] || guesses === 6) return setTimeout(endgame, 500)
    userInput.value = ''
  }
}

let mainParent = document.getElementById("search_text");

function autocomplete(inp, arr) {
  var currentFocus;

  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();

      console.log(inp.value);

      if (!val) return false;
      
      a = document.createElement("DIV");
      a.setAttribute("id", "autocomplete-list");
      a.setAttribute("class", "autocomplete_items");
      mainParent.appendChild(a);

      for (i = 0; i < arr.length && a.children.length < 5; ++i) {
        if (arr[i].substr(0, val.length) == val) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete_items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
console.log(cuvinte_corecte.length);
autocomplete(document.getElementById("text_search"), cuvinte_corecte);