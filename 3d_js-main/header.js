import React from "React";

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.showComponent  = props.showComponent
    }
}
render () {
    return(
        <div>
            < button onClick={()=>this.showComponent('Calculator')}>Калькулятор </button>
            < button onClick={()=>this.showComponent('Graph_2D')}>Graph_2D </button>
            < button onClick={()=>this.showComponent('Graph_3D')}>Graph_3D</button>
        </div>
    )
}