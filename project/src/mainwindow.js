import React from 'react';
import Filtr from './flitr';
import ProductTabel from './ProductTable';

 class Mainwindow extends React.Component {
 constructor(props){
     super(props)
     this.state={
        selectedmonth:null,
        selectedyear:null
     }
 }
 
 handlefiltr = (month,year) =>{
    this.setState({
        selectedmonth: month,
        selectedyear:year
    })

}

 render(){
console.log(this.state.selectedyear);
     return(<div>
     <h1>Nowe Planszówki</h1><br/>
    <Filtr handlefiltr={this.handlefiltr}></Filtr>
    <h2>Kalendarz premier i dodruków</h2>
    <ProductTabel selectedmonth={this.state.selectedmonth} selectedyear={this.state.selectedyear}></ProductTabel>
     </div>);
 }
 }
 export default Mainwindow;