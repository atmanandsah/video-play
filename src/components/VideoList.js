import React from 'react';
import VideoItem from './VideoItem';

const VideoList  = ({videos, videoSelect}) => {
    const renderList = videos.map( (video) => {
        return <VideoItem key={video.id.videoId} selectVideoItem={videoSelect} video={video}/>
    })

    return(
        <div className="ui relaxed divided list"> {renderList}</div> 
    )
}

export default VideoList;