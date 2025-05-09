import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';

import Webcam from 'react-webcam';



function App() {
 const webcamRef = useRef(null);
 const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user"
};
const [url, setUrl] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }


  

  return (
    <>
    
      
      <h1 className='m-5'>Camera App</h1>
      <div className="continer">
        <div className="row py-5 px-5">
          <div className="col-md-6 offset-md-3">
            <h3>Webcam Camera</h3>
            <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={720}
            videoConstraints={videoConstraints}
          />
          <button className='btn btn-primary m-3' onClick={capture}>Capture photo</button>
          <button type="button" class="btn btn-success" onClick={() => {setUrl(null)}}>Refresh</button>

          {url && (
            <>
            <div>
              <img src={url}/>
              <a type="button" class="btn btn-success m-3" href={url} download='captured-image.jpg'>
                download image
              </a>
            </div>
            </>
          )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
