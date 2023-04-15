import React from "React";
import Header from './components/Header/Header';
import Calculator from './components/calculator/calculator';
import Graph_2D from "./components/Graph_2D/Graph_2D";
import Graph_3D from "./components/Graph_3D";

import 'App.css';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state= { showComponent: 'Graph_3D'}
    }
}
showComponent(name){
    this.setState({showComponent:name});
}

render (){
    return(
        <Header />
        {
            this.state.showComponent === 'Calculator' ?
            <Calculator/> :
                this.state.showComponent === 'Graph_2D' ?
                <Graph_2D/>:
                this.state.showComponent === 'Graph_3D' ?

        }
    )
}