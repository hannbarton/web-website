import React from "react";

class Browser extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="browser">
				<div className="fake-menu">
					<div className="fake-buttons fake-close" />
					<div className="fake-buttons fake-minimize" />
					<div className="fake-buttons fake-zoom" />
				</div>
				<div className="fake-screen">
					<p className="line1">
						{`[ "Hello there!",`}
						<span className="cursor1">_</span>
					</p>
					<p className="line2">
						<span className="blank">{"__"}</span>
						{`"My name is Hannah.",`}
						<span className="cursor2">_</span>
					</p>
					<p className="line3">
						<span className="blank">{"__"}</span>
						{`"I'm a full stack developer." ]`}
						<span className="cursor3">_</span>
					</p>
					<p className="line4">
						><span className="cursor4"></span>
                        <form className='hidden-form'>
							<label>
								<input type="text" name="input" />
							</label>
							{/* <button type="submit" value="Submit" /> */}
						</form>

					</p>
				</div>
			</div>
		);
	}
}

export default Browser;
