import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div className="">Loading...</div>;
  return (
    <div className="">
      <div className="ui embed">
        <iframe src={`https://youtube.com/embed/${video.id.videoId}`}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
