/* eslint-disable react-hooks/exhaustive-deps */

import "./style.scss";
import React from "react";
import Webcam from "react-webcam";

const CameraPage = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  // const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [videoUrl, setVideoUrl] = React.useState("");
  const [playState, setPlayState] = React.useState(true);

  const handleStartCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    setPlayState(true);
  }, [webcamRef, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
  }, [mediaRecorderRef, webcamRef]);

  const handlePreview = React.useCallback(() => {
    setPlayState(false);
    const blob = new Blob(recordedChunks, {
      type: "video/webm",
    });
    const url = window.URL.createObjectURL(blob);
    setVideoUrl(url);
  }, [recordedChunks]);

  const handleDownload = () => {
    const blob = new Blob(recordedChunks, {
      type: "video/webm",
    });
    const url = window.URL.createObjectURL(blob);
    if (navigator.share) {
      navigator
        .share({
          title: "web.dev",
          text: "Check out web.dev.",
          url: url,
        })
        .then(() => alert("Successful share"))
        .catch((error) => alert("Error sharing", error));
    }
    // const blob = new Blob(recordedChunks, {
    //   type: "video/webm",
    // });
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // document.body.appendChild(a);
    // a.style = "display: none";
    // a.href = url;
    // a.download = "react-webcam-stream-capture.webm";
    // a.click();
    // window.URL.revokeObjectURL(url);
  };
  const handlePreviewClose = () => {
    setRecordedChunks([]);
    setPlayState(true);
    setVideoUrl("");
  };
  return (
    <div className="cameraPage mainPage">
      <button className="cameraCloseBtn iconBtn">
        <img
          src="/images/other/close_btn.png"
          width="31.5px"
          height="31.5px"
          alt=""
        />
      </button>
      <div className="cameraBox">
        <Webcam audio={false} ref={webcamRef} />
      </div>

      <button
        className="captureBtn iconBtn"
        onTouchStart={() => handleStartCaptureClick()}
        onTouchEnd={() => handleStopCaptureClick()}
        style={{ backgroundImage: "url(/images/other/Camera_Button.png" }}
      >
        {/* <img src="/images/other/Camera_Button.png" alt="" /> */}
      </button>
      {recordedChunks.length > 0 && (
        <div className="videoContainer">
          <div className="videoBox">
            <video
              src={videoUrl}
              width="302px"
              height="390px"
              controls
              autoPlay="true"
              title="video"
            />
            <button
              className={playState ? "btPlay active" : "btPlay"}
              onClick={handlePreview}
            ></button>
            <button className="iconBtn downloadBtn" onClick={handleDownload}>
              <img
                src="/images/other/download.png"
                width="50px"
                height="50px"
                alt=""
              />
            </button>
            <button
              className="previewCloseBtn iconBtn"
              onClick={handlePreviewClose}
            >
              <img
                src="/images/other/close_btn.png"
                alt=""
                width="31px"
                height="31px"
              />
            </button>
          </div>
        </div>
      )}
      <video
        src="blob:https://deluxe-flan-32b73a.netlify.app/788b7593-aee6-4c24-9996-d4d69cc134c6"
        width="202px"
        height="190px"
        controls
        autoPlay="true"
        title="video"
      />
    </div>
  );
};
export default CameraPage;
