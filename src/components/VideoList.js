import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoClick}) => {

	//function to extract video items from video list 
	// prop video called to 
	const renderedList = videos.map((video)=>{
		return <VideoItem  key={video.id.videoId} onVideoClick={onVideoClick} video={video}/>;
	}


		);
	return <div className="ui relaxed divided list">{renderedList}</div>;
		
		
	
};

export default VideoList;