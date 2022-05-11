import "./style.scss";
import React from "react";
import Webcam from "react-webcam";

const CameraPage = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [videoUrl, setVideoUrl] = React.useState("");

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

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
    setCapturing(false);
    previewVideo();
    alert("stop")
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const previewVideo = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // document.body.appendChild(a);
      // a.style = "display: none";
      // a.href = url;
      // a.download = "react-webcam-stream-capture.webm";
      // a.click();
      window.URL.revokeObjectURL(url);
      setVideoUrl(url);
      alert(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);
  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // document.body.appendChild(a);
      // a.style = "display: none";
      // a.href = url;
      // a.download = "react-webcam-stream-capture.webm";
      // a.click();
      window.URL.revokeObjectURL(url);
      setVideoUrl(url);
      alert(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

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
        <Webcam audio={false} ref={webcamRef} width={400} height={400} />
      </div>

      <button
        className="captureBtn iconBtn"
        onTouchStart={handleStartCaptureClick}
        onTouchEnd={handleStopCaptureClick}
        style={{backgroundImage: 'url(/images/other/Camera_Button.png'}}
      >
        {/* <img src="/images/other/Camera_Button.png" alt="" /> */}
      </button>
      {recordedChunks.length > 0 && (
        <div className="videoContainer">
          <div className="videoBox">
            <iframe src={videoUrl} allow="camera; microphone;" />
            <button className="iconBtn downloadBtn" onClick={handleDownload}>
              <img
                src="/images/other/download.png"
                width="50px"
                height="50px"
                alt=""
              />
            </button>
          </div>
        </div>
      )}
      {/* <div className="videoContainer">
        <div className="videoBox">
          <iframe src={videoUrl} allow="camera; microphone;" />
          <button className="iconBtn downloadBtn" onClick={handleDownload}>
            <img
              src="/images/other/download.png"
              width="50px"
              height="50px"
              alt=""
            />
          </button>
        </div>
      </div> */}
    </div>
  );
};
export default CameraPage;
