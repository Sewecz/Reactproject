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
 
 handleSearchBarInput = (month) =>{
    this.setState({
        selectedmonth: month
    })

}

 render(){

     return(<div>
     <p><h1>Nowe Planszówki</h1> </p>
    <Filtr handleSearchBarInput={this.handleSearchBarInput}></Filtr>
    <p><h2>Kalendarz premier i dodruków</h2></p>
    <ProductTabel selectedmonth={this.state.selectedmonth}></ProductTabel>
     </div>);
 }
 }
 export default Mainwindow;