import hao from './hao.jpg';
import './App.css';

function App() {
  var startDate = new Date(2024, 1, 27);
  var today = new Date();
  var difference = today - startDate;

  var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  difference -= years * (1000 * 60 * 60 * 24 * 365);
  var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
  difference -= months * (1000 * 60 * 60 * 24 * 30);
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  difference -= days * (1000 * 60 * 60 * 24);
  var hours = Math.floor(difference / (1000 * 60 * 60));
  difference -= hours * (1000 * 60 * 60);
  var minutes = Math.floor(difference / (1000 * 60));
  difference -= minutes * (1000 * 60);
  var seconds = Math.floor(difference / 1000);

  return (
    // center this div in the middle of the page

    <div className="App" >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:  '70px' }}>
        It's been {years} years, {months} months, {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds since he left!
        <br />
        <br />

        We miss you, Hao!
      </div>
      
      <div>
        <img src={hao} alt="hao" style={{ width: '300px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '90px' }}>
        <a style={{ marginLeft: '30px' }} href="https://www.facebook.com/hachihao792001">>His facebook</a>
        <a style={{ marginLeft: '30px' }} href="https://www.youtube.com/@BlueShadow792001/videos">>His legacy</a>
        <a style={{ marginLeft: '30px' }} href="https://www.facebook.com/phus1011/">>Contribute to this project</a>
      </div>
    </div>
  );
}

export default App;
