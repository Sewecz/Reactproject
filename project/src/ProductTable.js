import React from "react";
import Product from "./produtcs";
import TableProducts from './TableProducts.json';
class ProductTabel extends React.Component{
constructor(props){
    super(props)
    this.state ={
        productList: [],
        selectedMonth: props.selectedMonths
    }
    
    this.popProductsTable()
}
componentWillReceiveProps(props){
    this.state.selectedMonth = props.selectedMonths
}
popProductsTable(){
    for (var key in TableProducts) {
        if (TableProducts.hasOwnProperty(key)) {
            this.setState({
                productList: this.state.productList.push(<Product index={key}/>)
            })
        }
    }
    console.log(key);
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
                this.state.productList.push(<Product  index={key}/>)
            }
        }
    }
}
render(){
    console.log(this.state.productList);
    return(<div>
           <div>
                {this.state.productList.map((item, index)=>(<div key={index}>{item}</div>))}
            </div>
    </div>);
}
}
export default ProductTabel;