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
			<div className="project-browser">

				<div className="fake-menu">
					<div onClick={this.closeHandler} className="fake-buttons fake-close" />
					<div className="fake-buttons fake-minimize" />
					<div className="fake-buttons fake-zoom" />
				</div>
				<div className="project-screen">
					<div className='inner-twitter'>
						<span className='inner-twitter-text'>
							<img className='dot' src='./images/twitter.png'></img>
							<span className="twitter-bold">
								{`Hannah @hannbarton`}
							</span>
							<br/>
							<span className="twitter-line">
								{`An application that allows users to create a`}
							</span>
							<br/>
							<span className="twitter">
								{`visual poem from #trendinghashtags`}
							</span>
						</span>
						<img className='found-poetry-pic' src='./images/found.png'></img>
						<br/>
					</div>
				</div>
			</div>
		);
	}
}

export default Project1;
