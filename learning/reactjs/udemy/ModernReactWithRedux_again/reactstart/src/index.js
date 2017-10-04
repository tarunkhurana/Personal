import React,{Component} from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

//Function Based Component i.e, component class
// const App=()=>{
//         return(
//             <div>React Simple Starter</div>
//         )
// }
// React Dom requires instance of Component. we cannot directly render class i.e, App in place we use <App/> which
//is instance of App component



ReactDOM.render(<App/>,document.getElementById("root"));