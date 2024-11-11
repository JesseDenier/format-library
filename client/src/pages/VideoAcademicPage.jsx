import React from "react";

const VideoAcademicPage = () => {
  return (
    <main className="flex flex-col h-screen px-4 mx-auto pt-20">
      <div className="flex-grow mb-4  relative max-h-[100vh] flex justify-center items-center">
        {/* Wrapping the video element inside a flex container to center it */}
        <video
          controls
          className="border border-gray-300 w-full max-w-[100%] h-auto max-h-[90vh]"
          style={{ border: "none" }}
        >
          <source src="/private/video_academic_b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
};

export default VideoAcademicPage;
