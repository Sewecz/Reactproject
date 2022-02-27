import React from 'react';
import style from './style.css';
const products=[
    {month:"styczeń",name:"Blitzkrieg!: World War Two in 20 Minutes",premier:true},
    {month:"marzec",name:"Park sawanna",premier:true},
    {month:"maj",name:"Aeon's End: The New Age",premier:false},
    {month:"czerwiec",name:"Golem",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
    {month:"",name:"",premier:true},
]

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: "",

        }
        this.handle=this.handle.bind(this)
    }
    handle(){

    }
    render(){
        const value= this.state.value;
        return(<div><h1>Wyszukaj</h1><br/>
        <input type="text" value={value} onChange={this.handle} />
        </div>);
    }
}
class Filerm extends React.Component{

}

class Table extends React.Component{
constructor(props){
    super(props)
}
    render(){
        return(<div className={style.table}><Product style={style.product}></Product></div>)
    }
}
class Premier extends React.Component{

}
function Product(props) {
return(<div className={props.style}></div>)
    
}
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
     <Filerm></Filerm>
     <Premier></Premier>
    <Table></Table>
     </div>);
 }
 }
 export default Mainwindow;