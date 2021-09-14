// CHECKPOINT 1

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

let alimentos = ["pipoca", "macarrao", "carne", "feijao", "brigadeiro"]
let tempoAlimentos = [10, 8, 15, 12, 8]

function microondas(padrao,tempo) {
  function burn (index) {
    if (tempo < tempoAlimentos[index]) {
      console.log("Tempo insuficiente.")
    }
    else if (tempo >= tempoAlimentos[index]*2 && tempo < tempoAlimentos[index]*3) {
      console.log("Sua comida queimou!!!")
    }
    else if (tempo >= tempoAlimentos[index]*3) {
      console.log("KABUM!!!")
    }
  }
    switch (padrao) {
      case 1: 
      burn(0);
      console.log(`${alimentos[0]} Bom apetite!!!`);
      break;
      case 2:
      burn(1);
      console.log(`${alimentos[1]} Bom apetite!!!`);
      break;
      case 3:
      burn(2);
      console.log(`${alimentos[2]} Bom apetite!!!`);
      break;
      case 4:
      burn(3);
      console.log(`${alimentos[3]} Bom apetite!!!`);
      break;
      case 5:
      burn(4);
      console.log(`${alimentos[4]} Bom apetite!!!`);
      break;
      default: console.log("Prato inexistente!");
    }
  }

microondas(2,16)