const heroName = "Joãozinho";
const heroExp = 2;

switch (true) {

    case heroExp < 1000:
        console.log(`O Herói de nome ${heroName} está no nível de Ferro`);
        break;
    case heroExp > 1000 && heroExp < 2000:
        console.log(`O Herói de nome ${heroName} está no nível de Bronze`);
        break;
    case heroExp > 2000 && heroExp <= 5000:
        console.log(`O Herói de nome ${heroName} está no nível de Prata`);
        break;
    case heroExp > 5000 && heroExp <= 7000:
        console.log(`O Herói de nome ${heroName} está no nível de Ouro`);
        break;
    case heroExp > 7000 && heroExp <= 8000:
        console.log(`O Herói de nome ${heroName} está no nível de Platina`);
        break;
    case heroExp > 8000 && heroExp <= 9000:
        console.log(`O Herói de nome ${heroName} está no nível de Ascendente`);
        break;
    case heroExp > 9000 && heroExp <= 10000:
        console.log(`O Herói de nome ${heroName} está no nível de Imortal`);
        break;
    case heroExp > 10000:
        console.log(`O Herói de nome ${heroName} está no nível de Radiante`);
        break;
}
