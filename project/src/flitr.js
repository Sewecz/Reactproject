import React from 'react';


class Filtr extends React.Component{
    constructor(props){
        super(props)
        this.state={
       selectedmonth: 0,
    }
   
}
handleClickMonths(month){
    this.props.handleSearchBarInput(month)
}

render(){
    return( <div>
        <button onClick={()=>this.handleClickMonths(1)}>January</button>
        <button onClick={()=>this.handleClickMonths(2)}>February</button>
        <button onClick={()=>this.handleClickMonths(3)}>March</button>
        <button onClick={()=>this.handleClickMonths(4)}>April</button>
        <button onClick={()=>this.handleClickMonths(5)}>May</button>
        <button onClick={()=>this.handleClickMonths(6)}>June</button>
        <button onClick={()=>this.handleClickMonths(7)}>July</button>
        <button onClick={()=>this.handleClickMonths(8)}>August</button>
        <button onClick={()=>this.handleClickMonths(9)}>September</button>
        <button onClick={()=>this.handleClickMonths(10)}>October</button>
        <button onClick={()=>this.handleClickMonths(11)}>November</button>
        <button onClick={()=>this.handleClickMonths(12)}>December</button>
    </div>);
}
}
export default Filtr;