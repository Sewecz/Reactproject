import React from "react";
import Product from "./produtcs";
import TableProducts from './TableProducts.json';
import {Productmonth} from './components.js';
class ProductTabel extends React.Component{
constructor(props){
    super(props)
    this.state ={
        productList2021: [],
        productList2022: [],
        selectedMonth: "",
        selectedYear:"",
    }
   
    this.popProductsTable();    
    
}
componentWillReceiveProps(props){
    this.state.selectedYear = props.selectedyear;
    this.state.selectedMonth = props.selectedmonth;
    this.updateTable();

}

popProductsTable(){
    for (var key in TableProducts) {
        if (TableProducts.hasOwnProperty(key)) {
            if(TableProducts[key]["year"]==="2022"){ 
            this.setState({
                productList2022: this.state.productList2022.push(<div className="onegame"><Productmonth index={key}/><Product index={key}/></div>),
            })
        }else{
            this.setState({
                productList2021: this.state.productList2021.push(<div className="onegame"><Productmonth index={key}/><Product index={key}/></div>),
            })
        }
        }
    }
}
updateTable(){
    this.setState({
        productList2022: this.state.productList2022 = [],
      productList2021:this.state.productList2021=[]
    })
    for (var key in TableProducts) {
        if (TableProducts.hasOwnProperty(key)) {
            if(TableProducts[key]["year"]==="2022"){
            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===TableProducts[key]["month"]){
                this.state.productList2022.push(<Product key={key}  index={key}/>)
            }else if(this.state.selectedMonth===0){
                       this.state.productList2022.push(<Product key={key} index={key}/>)
            }else if(this.state.selectedYear!==null&&this.state.selectedYear.toString()===TableProducts[key]["year"]){
                this.state.productList2022.push(<Product key={key}  index={key}/>)
            }else if(this.state.selectedYear===0){
                this.state.productList2022.push(<Product key={key}  index={key}/>)
        }   
    }else{
        if(TableProducts[key]["year"]==="2021"){
            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===TableProducts[key]["month"]){
                this.state.productList2021.push(<Product key={key}  index={key}/>)
            }else if(this.state.selectedMonth===0){
                       this.state.productList2021.push(<Product key={key} index={key}/>)
            }else if(this.state.selectedYear!==null&&this.state.selectedYear.toString()===TableProducts[key]["year"]){
                this.state.productList2021.push(<Product key={key}  index={key}/>)
              
            }else if(this.state.selectedYear===0){
                this.state.productList2021.push(<Product key={key}  index={key}/>)
        }   
    }
}
        
    }
} 
}
render(){

    return(<div>
           <p><h1>2022</h1><br/>
                {this.state.productList2022.map((item,key)=>(<div key={key}>{item}</div>))}
                </p>     
                <p> 
                <h1>2021</h1>
                {this.state.productList2021.map((item,key)=>(<div key={key}>{item}</div>))}
            </p></div>);
}
}
export default ProductTabel;