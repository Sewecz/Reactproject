import React from 'react';
import {ProductLabel, ProductName} from './components';
import photo from './photos/static.png';
class Product extends React.Component{
 constructor(props){
     super(props);
     this.state={
         
     }
 }
 render(){

     return(<div>
        <div className="onegame">
         <img src={photo}/>
        <ProductLabel index={1}></ProductLabel>
       <ProductName index={1}></ProductName>
     </div>
     <div className="onegame">
         <img src={photo}/>
        <ProductLabel index={2}></ProductLabel>
       <ProductName index={2}></ProductName>  </div>
       </div>);
 }
}
export default Product;