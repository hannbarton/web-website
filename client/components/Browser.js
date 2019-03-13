import React from "react";

class Browser extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='browser'>
				<div className="fake-menu">
					<div className="fake-buttons fake-close" />
					<div className="fake-buttons fake-minimize" />
					<div className="fake-buttons fake-zoom" />
				</div>
				<div className="fake-screen">
					<p className="line1">
                        {`[ "I'm a web developer."`}
						<span class="cursor1">_</span>
					</p>
					{/* <p className="line2">
						&nbsp;&nbsp;&ldquo;I'm a web designer.&rdquo;,
						<span class="cursor2">_</span>
					</p>
					<p className="line3">
						&nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;
						<span class="cursor3">_</span>
					</p>
					<p className="line4">
						><span class="cursor4">_</span>
					</p> */}
				</div>
			</div>
		);
	}
}

export default Browser;
