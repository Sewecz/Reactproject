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
    return(<div> <div className='buttonsl'>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(1)}>January</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(2)}>February</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(3)}>March</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(4)}>April</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(5)}>May</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(6)}>June</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(7)}>July</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(8)}>August</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(9)}>September</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(10)}>October</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(11)}>November</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(12)}>December</button>
    </div>
    <div className='rightpanel'>    
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(1)}>January</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(2)}>February</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(3)}>March</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(4)}>April</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(5)}>May</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(6)}>June</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(7)}>July</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(8)}>August</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(9)}>September</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(10)}>October</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(11)}>November</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(12)}>December</button></div>
    </div>);
}
}
export default Filtr;