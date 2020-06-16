import React from 'react';

const VideoDetail = ({video}) => {

if(!video){
	return <div>Loading...</div>;
}

const videoId = video.id.videoId;
const videoSrc = `https://www.youtube.com/embed/${videoId}`;
//props.video = {video} distructuring
	return(
		<div>
			<div className="ui embed">
				<iframe  title="Video Player" src={videoSrc}/>
			</div>
			<div className= "ui segment">
				<h4 className="ui header"> {video.snippet.title} </h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>


		);

};

export default VideoDetail;