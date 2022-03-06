import React from "react";
import Product from "./produtcs";
import TableProducts from './TableProducts.json';
class ProductTabel extends React.Component{
constructor(props){
    super(props)
    this.state ={
        productList: [],
        selectedMonth: props.selectedmonth
    }
    
    this.popProductsTable();
    
}
componentWillReceiveProps(props){
    this.state.selectedMonth = props.selectedmonth;
    this.updateTable()
    console.log(this.state.selectedMonth)
}
popProductsTable(){
    for (var key in TableProducts) {
        if (TableProducts.hasOwnProperty(key)) {
            this.setState({
                productList: this.state.productList.push(<Product index={key}/>)
            })
        }
    }
}
updateTable(){
    this.setState({
        productList: this.state.productList = []
    })
    for (var key in TableProducts) {
        if (TableProducts.hasOwnProperty(key)) {
            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===TableProducts[key]["month"]){
                this.state.productList.push(<Product index={key}/>)
            }else if(this.state.selectedMonth===null){
                this.state.productList.push(<Product index={key}/>)
            }
        }   
    }
}
render(){
 
    return(
           <div>
                {this.state.productList.map((item)=>(<div>{item}</div>))}
            </div>);
}
}
export default ProductTabel;