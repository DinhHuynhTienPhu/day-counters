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


  //then every 1 second, update the count
  setInterval(function () {
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

    document.getElementById('text-count').textContent =
      "It's been " + years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds since he left!";
    
  }, 1000);




  return (
    // center this div in the middle of the page

    <div className="App" >
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:  '50px' }}>
        <span id='text-count' >It's been {years} years, {months} months, {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds since he left!</span>
        <br />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <h1>We miss you, Hao</h1>
      </div>
      
      <div>
        <img src={hao} alt="hao" style={{ width: '300px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '90px' ,marginBottom:'10px' }}>
        <a style={{ marginLeft: '30px' }} href="https://www.facebook.com/hachihao792001">>His facebook</a>
        <a style={{ marginLeft: '30px' }} href="https://www.youtube.com/@BlueShadow792001/videos">>His legacy</a>
        <a style={{ marginLeft: '30px' }} href="https://github.com/DinhHuynhTienPhu/day-counters">>Contribute to this project</a>
      </div>
    </div>
  );
}

export default App;
