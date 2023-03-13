const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = ()=> {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#fc0303"; 
            break;
            case "tarus":
            body.style.backgroundColor = "#67e689";
            break;
            case "gemini":
            body.style.backgroundColor = "#e1e856";
            break;
            case "cancer":
            body.style.backgroundColor = "#be19e3";
            break;
            case "leo":
            body.style.backgroundColor = "#ed1384";
            break;
            case "virgo":
            body.style.backgroundColor = "#b3256f";
            break;
            case "libra":
            body.style.backgroundColor = "#6b284b";
            break;
            case "scorpio":
            body.style.backgroundColor = "#592ec7";
            break;
            case "sagittarius":
            body.style.backgroundColor = "#822254" ;
            break;
            case "auarius":
            body.style.backgroundColor = "#c75d20";
            break;
            case "capricorn":
            body.style.backgroundColor = "#21dbde";
            break;
            case "pisces":
            body.style.backgroundColor = "#137b7d";
            break;
    
        default:
            body.style.backgroundColor = "#fff";
            break;
    }
};