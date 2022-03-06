import Tableproducts from './TableProducts.json';
import React from 'react';
export function ProductLabel(props){
    for (var key in Tableproducts) {
    var styl= "";
    if(Tableproducts[props.index]["premier"]==="Premiera"){
       styl = 'premiera';
    }else{
        styl='dodruk';
    }
}

    return(<div className={styl}>{Tableproducts[props.index]["premier"]}</div>)
}

export function ProductName(props){
    return( <div >{Tableproducts[props.index]["name"]}</div>)
}