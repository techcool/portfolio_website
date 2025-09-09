import React from "react";

export default function Video({videoSrc}) {
  return (
    <>
      <video
        loop
        muted
        autoPlay
        playsInline
        className="w-full h-auto object-cover rounded-xl"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
}
