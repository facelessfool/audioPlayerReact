import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import song from  './music/song.mp3'
import API from './apikey/api'



function App() {

   const resfunc = async() =>{
    let userData = await API.get('/', {
      params: {
        results: 1,
        inc: 'name,email,picture'
      }
    }); 
    console.log("response: ",userData)
  }

  
  resfunc()
  
  return (
    <div className="App">
      <header className="App-header">

      



      


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Audio player with react
          <ReactPlayer
            // url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
            url={song}
            width="400px"
            height="50px"
            playing={false}
            controls={true}
      />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
