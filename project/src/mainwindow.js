import React from 'react';
import style from './style.css';
import Search from './Search.js';
import Filtr from './flitr';
import Products from './produtcs';
 class Mainwindow extends React.Component {
 constructor(props){
     super(props)
     this.state={

     }
 }
 
componentWillReceiveProps(props){

}

 render(){
     return(<div><Search></Search> 
    <Filtr></Filtr>
    <Products></Products>
    <footer>created by xyz</footer>
     </div>);
 }
 }
 export default Mainwindow;