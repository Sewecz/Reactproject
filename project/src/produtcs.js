import React from 'react';
import {ProductLabel, ProductName,Productmonth} from './components';
import Tableproducts from './TableProducts.json';

import photo from './photos/static.png';
class Product extends React.Component{
 constructor(props){
     super(props);
      this.state={
     }

 }
 

  


 render(){
     return(
       <div>
                
        <div className="onegame">
        <b><ProductLabel index={this.props.index}></ProductLabel></b>
         <img src={photo}  alt="xyz"/>
       <ProductName index={this.props.index}></ProductName>
       <Productmonth index={this.props.index}></Productmonth>
     </div>
     </div>
       );
 }
}
export default Product;