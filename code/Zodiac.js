let year = 2001;
let findZodiac = year%12;

    switch(findZodiac){
            case 0 :
            console.log("monkey");
            break;
            case 1 :
            console.log('Rooster')
            break;
            case 2 :
            console.log("Dog");
            break;
            case 3 :
            console.log("Pig");
            break;
            case 4 :
            console.log("Rat");
            break;
            case 5 :
            console.log("Ox");
            break;
            case 6 :
            console.log("Tiger");
            break;
            case 7 :
            console.log("rabbit");
            break;
            case 8 :
            console.log("Dragon");
            break;
            case 9 :
            console.log("Snake");
            break;
            case 10 :
            console.log("Horse");
            break;
            case 11 :
            console.log("Sheep");
            break;
    }

console.log(findZodiac);