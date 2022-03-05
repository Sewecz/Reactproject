import Tableproducts from './TableProducts.json';

export function ProductLabel(props){
    return <div >{Tableproducts[props.index]["premier"]}</div>
}

export function ProductName(props){
    return <div >{Tableproducts[props.index]["name"]}</div>
}