import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoClick})=>{ //props.video, props.onVideoClick, 
	 
	 return (
		/*onClick event always must have a function*/
		//onVideoClick function with passed video prop calls to App handleVideoClick through VideoList component prop. 
		//video.snippet.title/thumbnails called to props VideoItem in VideoList component. video is extracted from videos prop
	 	<div onClick={() => onVideoClick(video)} className="video-item item">
		 	<img  alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} /> 
		 	<div className="content">
		 		<div className="header">{video.snippet.title}</div>
		 	</div>
	 	</div>
	 	);

};

export default VideoItem;