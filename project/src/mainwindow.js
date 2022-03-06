import React from 'react';
import Filtr from './flitr';
import ProductTabel from './ProductTable';
 class Mainwindow extends React.Component {
 constructor(props){
     super(props)
     this.state={
        selectedmonth:null
     }
 }
 
 handleSearchBarInput = ( month) =>{
    this.setState({
        selectedmonth: month
    })
}

 render(){
     return(<div>
    <Filtr handleSearchBarInput={this.handleSearchBarInput}></Filtr>
    <ProductTabel selectedmonth={this.state.selectedmonth}></ProductTabel>
     </div>);
 }
 }
 export default Mainwindow;