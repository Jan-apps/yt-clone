import axios from 'axios';


const KEY = 'AIzaSyAGA9oe_BF3uYc3M8XcxApRHcsMrBvQvtA';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params:
	{
		part: 'snippet',
		maxResults: 15,
		key: KEY
	}
});

/*




export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});
*/