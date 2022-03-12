import React from "react";
import Product from "./produtcs";
import TableProducts from './TableProducts.json';

class ProductTabel extends React.Component{
constructor(props){
    super(props)
    this.state ={
        productList: [],
        selectedMonth: "",
        selectedYear:"",
        productList1:[]
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
                productList: this.state.productList.push(<Product index={key}/>),
          
            })
        }else{
            this.setState({
                productList: this.state.productList1.push(<Product index={key}/>),
             
            })
        }
        }
    }
}
updateTable(){
    this.setState({
        productList: this.state.productList = [],
      productList1:this.state.productList1=[]
    })
    for (var key in TableProducts) {
        if (TableProducts.hasOwnProperty(key)) {
            if(TableProducts[key]["year"]==="2022"){
            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===TableProducts[key]["month"]){
                this.state.productList.push(<Product key={key}  index={key}/>)
            }else if(this.state.selectedMonth===0){
                       this.state.productList.push(<Product key={key} index={key}/>)
            }else if(this.state.selectedYear!==null&&this.state.selectedYear.toString()===TableProducts[key]["year"]){
                this.state.productList.push(<Product key={key}  index={key}/>)
              
            }else if(this.state.selectedYear===0){
                this.state.productList.push(<Product key={key}  index={key}/>)
        }   
    }else{
        if(TableProducts[key]["year"]==="2021"){
            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===TableProducts[key]["month"]){
                this.state.productList1.push(<Product key={key}  index={key}/>)
            }else if(this.state.selectedMonth===0){
                       this.state.productList1.push(<Product key={key} index={key}/>)
            }else if(this.state.selectedYear!==null&&this.state.selectedYear.toString()===TableProducts[key]["year"]){
                this.state.productList1.push(<Product key={key}  index={key}/>)
              
            }else if(this.state.selectedYear===0){
                this.state.productList1.push(<Product key={key}  index={key}/>)
        }   
    }
}
        
    }
} 
}
render(){

    return(<div>
           <p><h1>2022</h1><br/>
                {this.state.productList.map((item,key)=>(<div key={key}>{item}</div>))}
                </p>     
                <p> 
                <h1>2021</h1>
                {this.state.productList1.map((item,key)=>(<div key={key}>{item}</div>))}
            </p></div>);
}
}
export default ProductTabel;