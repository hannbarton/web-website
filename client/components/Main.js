import React from 'react'
import Move from './Move';
import Bar from './Bar'
import FolderMove from './FolderMove'
import Project1 from './Project1'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            Project1: false
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        e.preventDefault()
        this.setState({Project1: !this.state.Project1});
    }


    render() {
        console.log(this.state)
        return(
            <div>
                <div onClick={this.handleClick}>
                    <FolderMove/>
                </div>
                    {this.state.Project1 && <Project1 />}
                <Move/>
                {/* <Bar/> */}
            </div>
        )
    }
}

export default Main
