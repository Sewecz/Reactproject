import React from 'react';

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
        return(<div><input type="text" value={value} onChange={this.handle} /></div>);
    }
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
    const products=[
        {month:"styczeń",name:"Blitzkrieg!: World War Two in 20 Minutes",premier:true},
        {month:"marzec",name:"Park sawanna",premier:true},
        {month:"maj",name:"Aeon's End: The New Age",premier:true},
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
     return(<div><Search></Search> {products[]}
     </div>);
 }
 }
 export default Mainwindow;