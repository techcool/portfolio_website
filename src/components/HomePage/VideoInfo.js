import React from "react";

function VideoInfo() {
  return (
    <>
      <div className="wrapper">
        <div className="video-info">
          <div className="video-intro">
            <label htmlFor="video_check" className="pointer-events-none absolute opacity-0">Watch Video</label>
            <input id="video_check" type="checkbox" />
            <div className="intro-title">
              <h4 className="video-title">
                Watch <span>video intro</span>
              </h4>
              <h4 className="video-title close-video-title">
                Close <span className="font-semibold">video intro</span>
              </h4>
            </div>
            <div className="video">
              <video
                src="../../../assets/video/hero-3.mp4"
                loop
                muted
                autoPlay
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoInfo;
