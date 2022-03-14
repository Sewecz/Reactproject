import Tableproducts from './TableProducts.json';
import React from 'react';
export function ProductLabel(props){

    var styl= "";
    if(Tableproducts[props.index]["premier"]==="Premiera"){
       styl = 'premiera';
    }else{
        styl='dodruk';
    
}

    return(<div className={styl}>{Tableproducts[props.index]["premier"]}</div>)
}

export function ProductName(props){
    return( <div >{Tableproducts[props.index]["name"]}</div>)
}
export function Productmonth(props){
    var month="";
    switch (Tableproducts[props.index]["month"]) {
        case "1":
                 month="Styczeń"   
            break;
    case "2":
        month="Luty"
        break;
        case "3":
            month="Marzec"
        break;
        case "4":
            month="Kwiecień"
        break;
        case "5":
            month="Maj"
        break;
        case "6":
            month="Czerwiec"
        break;
        case "7":
            month="Lipiec"
        break;
        case "8":
            month="Sierpień"
        break;
        case "9":
            month="Wrzesień"
        break;
        case "10":
            month="Październik"
        break;
        case "11":
            month="Listopad"
        break;
        case "12":
            month="Grudzień"
        break;
        default:
            break;
    }
    return( <div>{month}</div>)
}