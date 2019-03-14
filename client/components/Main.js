import React from 'react'
import Move from './Move';
import FolderMove from './FolderMove'

class Main extends React.Component {

    render() {
        return(
            <div>
                <FolderMove/>
                <Move/>
            </div>
        )
    }
}

export default Main
