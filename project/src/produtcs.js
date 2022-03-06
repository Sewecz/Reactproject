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
     return(
        <div className="onegame">
        <ProductLabel index={this.props.index}></ProductLabel>
         <img src={photo}  alt="xyz"/>
       <ProductName index={this.props.index}></ProductName>
     </div>
       );
 }
}
export default Product;