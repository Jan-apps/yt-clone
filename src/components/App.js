import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        }
    };

//didMount function runs automatically after app content is loaded
componentDidMount() {
        this.handleSearchSubmit("most popular");
    }

//handle function to search for items in youtube through youtube API and use of axios. Rest of params are defined in youtube API
handleSearchSubmit = async (inputSearch) => {
        const response = await youtube.get("/search", {
            params: {
                //part: "snippet",
                //maxResults: 5,
                //key: "AIzaSyAGA9oe_BF3uYc3M8XcxApRHcsMrBvQvtA",
                q: inputSearch,
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

//handle function that handles clicking on video item
handleVideoClick = (video) =>{

	this.setState({selectedVideo: video });
};


//render method prints defined components on the screen
	render(){

		return (
		//grid system used from symantic ui css stylesheet
		//props reference to components 
		<div className="ui container"> 
		  	<SearchBar /*prop*/onFormSubmit={this.handleSearchSubmit} /> 
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column"> <VideoDetail /*prop*/video= {this.state.selectedVideo}/></div>
					<div className="five wide column"><VideoList /*prop*/onVideoClick={this.handleVideoClick} /*prop*/videos={this.state.videos} /></div>
				</div>
			</div>
		</div>
		);
	}
}

export default App;