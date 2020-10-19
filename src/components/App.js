import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    relatives=["yash","harsh","vipul","praful"];
    render() {
        let relatives=["yash","harsh","vipul","praful"];
        return(
           <>
           <ol key="relativelist">
               {relatives.map((ele,index)=>(<li key={`relativeListItem${index}`}>{ele}</li>))}
               </ol>
	</>
        )
    }
}


export default App;
