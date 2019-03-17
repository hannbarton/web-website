import React from "react";

class Project1 extends React.Component {
	constructor() {
        super()

        this.state = {
            Project1: false
        }
        this.closeHandler = this.closeHandler.bind(this)
    }


    closeHandler(e){
        e.preventDefault()
        this.setState({Project1: !this.state.Project1});
    }

	render() {
		return (
			<div className="browser">

				<div className="fake-menu">
					<div onClick={this.closeHandler} className="fake-buttons fake-close" />
					<div className="fake-buttons fake-minimize" />
					<div className="fake-buttons fake-zoom" />
				</div>
				<div className="fake-screen">
					<p className="line1">
						{`[ An application that allows users`}
						<span className="cursor1">_</span>
					</p>
					<p className="line2">
						<span className="blank">{"__"}</span>
						{`to make a visual poem from `}
						<span className="cursor2">_</span>
					</p>
					<p className="line3">
						<span className="blank">{"__"}</span>
						{`currently #trendinghashtags ]`}
						<span className="cursor3">_</span>
					</p>
				</div>
			</div>
		);
	}
}

export default Project1;
