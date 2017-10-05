import React, {Component} from "react";

class Home extends Component {
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-8">
						<div>
								<img src={require('../images/share.jpg')} alt="share"/>
								<h1>Share</h1>
								<p>Share your thoughts, code and solutions to problems.</p>
						</div>
						<div>
								<img src={require('../images/search.jpg')} alt="search"/>
								<h1>Search</h1>
								<p>Find solution to problems, resources and a way to improve your skills.</p>
						</div>
						<div>	
								<img src={require('../images/connect.jpg')} alt="connect"/>
								<h1>Connect</h1>
								<p>Connect with others developers.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;