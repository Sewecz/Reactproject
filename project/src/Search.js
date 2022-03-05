import React from 'react';
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={searchQuery: ""
    }
}
render(){
    return(<div><h1>Wpisz fraze<input type="text"/></h1></div>);
}
}
export default Search;