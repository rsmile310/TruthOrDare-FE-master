
import "./style.scss";
import React from "react";
import Webcam from "react-webcam";

const CameraPage = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  // const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [videoUrl, setVideoUrl] = React.useState("");

  const handleStartCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
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
    // handleDownload();
  }, [mediaRecorderRef, webcamRef]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      setVideoUrl(url);
      a.click();
      window.URL.revokeObjectURL(url);
      alert(a.href)
      // setRecordedChunks([]);
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
        <Webcam audio={false} ref={webcamRef} />
      </div>

      <button
        className="captureBtn iconBtn"
        onTouchStart={handleStartCaptureClick}
        onTouchEnd={handleStopCaptureClick}
        style={{ backgroundImage: "url(/images/other/Camera_Button.png" }}
      >
        {/* <img src="/images/other/Camera_Button.png" alt="" /> */}
      </button>
      {recordedChunks.length > 0 && (
        <div className="videoContainer">
          <div className="videoBox">
            {/* <video src={videoUrl} allow="camera; microphone;" title="video" /> */}
            <video width='302' height='390' controls autoplay>
                <source src={videoUrl} type="video/webm" />
            </video>
            <button className="iconBtn downloadBtn" onClick={handleDownload}>
              <img
                src="/images/other/download.png"
                width="50px"
                height="50px"
                alt=""
              />
            </button>
            {/* <h1>{videoUrl}</h1> */}
          </div>
        </div>
      )}
      {/* <div className="videoContainer">
          <div className="videoBox">
            <iframe src="http://www.maquitron.com/SlideShow/perfil1.jpg" allow="camera; microphone;" title="video" />
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
