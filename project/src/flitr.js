import React from 'react';


class Filtr extends React.Component{
    constructor(props){
        super(props)
        this.state={
       selectedmonth: 0,
       selectedyear:0,
    }
   
}
handleClickMonths(month,){
    this.props.handlefiltr(month,null)
}
handleClickYears(year){
    this.props.handlefiltr(null,year)
}

render(){
    return(<div>
         <div className='buttonsl'>
         <button className='buttonsleft' onClick={()=>this.handleClickYears(2021)}>2021</button>
         <button className='buttonsleft' onClick={()=>this.handleClickYears(2022)}>2022</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(0)}>Wszystkie</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(1)}>Styczeń</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(2)}>Luty</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(3)}>Marzec</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(4)}>Kwiecień</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(5)}>Maj</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(6)}>Czerwiec</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(7)}>Lipiec</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(8)}>Sierpień</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(9)}>Wrzesień</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(10)}>Październik</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(11)}>Listopad</button>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(12)}>Grudzień</button>
    </div>
    <div className='rightpanel'>
    <button className='buttonsleft' onClick={()=>this.handleClickYears(2021)}>2021</button><br/>
         <button className='buttonsleft' onClick={()=>this.handleClickYears(2022)}>2022</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(0)}>Wszystkie</button><br/>
          <button className='buttonsleft' onClick={()=>this.handleClickMonths(0)}>Wszystkie</button> <br/>   
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(1)}>Styczeń</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(2)}>Luty</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(3)}>Marzec</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(4)}>Kwiecień</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(5)}>Maj</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(6)}>Czerwiec</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(7)}>Lipiec</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(8)}>Sierpień</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(9)}>Wrzesień</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(10)}>Październik</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(11)}>Listopad</button><br/>
        <button className='buttonsleft' onClick={()=>this.handleClickMonths(12)}>Grudzień</button></div>
    </div>);
}
}
export default Filtr;