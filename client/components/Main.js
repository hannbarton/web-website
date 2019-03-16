import React from 'react'
import Move from './Move';
import Bar from './Bar'
import FolderMove from './FolderMove'

class Main extends React.Component {

    render() {
        return(
            <div>
                <FolderMove/>
                <Move/>
                <Bar/>
            </div>
        )
    }
}

export default Main
