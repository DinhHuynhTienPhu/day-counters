import hao from './hao.jpg';
import './App.css';
import { useState, useEffect } from 'react';

function Home() {
    //const alert = useAlert()

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

    //get the number from the file love-count.json
    //var json = require('./love-count.json');
    const [count, setCount] = useState(0);
    const [myIP, setMyIP] = useState('');
    const [canClick, setCanClick] = useState(false);
    const [loaded, setLoaded] = useState(false);
    
    const [clickedIPs, setClickedIPs] = useState([]);
    var myIPRealData = '';
    useEffect(() => {
        //get my ip
        fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => {
            console.log(data.ip);
            setMyIP(data.ip);
            //eslint-disable-next-line
            myIPRealData = data.ip;
        }).then(() => {

            //featch from https://api.jsonbin.io/v3/b/65e3ea5adc74654018ace96f
            // master key: $2a$10$UhgI0u9jA/3QQnEW01EAPOXlK5oBj19b9kAyfzQ/SEs9pbISpYIBi
            // acess key: $2a$10$SCMCF5.iZl1tDduNAFiFZ.3pXZJUBuDbocxeKr/aQfXwJfXT/eaRu
             fetch('https://api.jsonbin.io/v3/b/65e3ea5adc74654018ace96f/latest', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': '$2a$10$UhgI0u9jA/3QQnEW01EAPOXlK5oBj19b9kAyfzQ/SEs9pbISpYIBi',
                    'X-Acess-Key': '$2a$10$SCMCF5.iZl1tDduNAFiFZ.3pXZJUBuDbocxeKr/aQfXwJfXT/eaRu'
                }
            }).then(response => response.json()).then(data => {
                console.log(data.record.count);
                setCount(data.record.count);
                //eslint-disable-next-line
                setClickedIPs(data.record.IPs);


                var date = data.record.date;

                var today = new Date();

                if (date !== today.toDateString()) {
                    //reset the "date" field to today
                    data.record.date = today.toDateString();
                    data.record.IPs = [];
                    var json = JSON.stringify(data.record);

                    fetch('https://api.jsonbin.io/v3/b/65e3ea5adc74654018ace96f', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Master-Key': '$2a$10$UhgI0u9jA/3QQnEW01EAPOXlK5oBj19b9kAyfzQ/SEs9pbISpYIBi',
                            'X-Acess-Key': '$2a$10$SCMCF5.iZl1tDduNAFiFZ.3pXZJUBuDbocxeKr/aQfXwJfXT/eaRu'
                        },
                        body: json
                    }).then(response => response.json()).then(data => {
                        console.log(data);
                        setLoaded(true);
                    }
                    );
                }
                else {
                    //if the date is today, then check if my ip is in the list
                    console.log("date is today");
                    //check if my ip is in the list
                    // wait till myIPRealData != ''


                    if (clickedIPs.includes(myIPRealData)) {
                        console.log("my ip = " + myIPRealData);
                        console.log("clickedIPs = " + clickedIPs);

                        setCanClick(false);
                        setLoaded(true);

                    }
                    else {
                        console.log("my ip = " + myIPRealData);
                        console.log("clickedIPs = " + clickedIPs);
                        setCanClick(true);
                        setLoaded(true);

                    }
                
                }

            });
        });
        

    } , []
    );
    
     



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
        var element = document.getElementById('text-count');
        if (element !== null)
        element.textContent =
            "It's been " + years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds since he joined the military service!";

    }, 1000);


    var showHeartEffect = function () {
        //show heart effect all over the screen
        //first, create a heart effect
        let listOfHearts2 = [];

        for (var i = 0; i < 20; i++) {
            var heart = document.createElement('div');
            heart.classList.add('heart');
            let randomName = Math.random() * 100000000000000000;
            heart.id = randomName;
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.opacity = Math.random();
            heart.innerText = '❤';
            
            heart.style.fontSize = Math.random() * 100 + Math.random(10,100) + 'px';
            heart.style.position = 'fixed';

            //color the heart to red or pink
            var color = Math.random() * 100;
            if (color < 50) {
                heart.style.color = 'red';
            }
            else {
                heart.style.color = 'pink';
            }

            // then do the animation, make it float randomly
            
            document.body.appendChild(heart);

            listOfHearts2.push(heart);
            setTimeout(() => {
                //delete heart div form the page fully
                let heart = document.getElementById(randomName);
                if(heart!==null)heart.remove();

                

            }, 10000);
        }
        makeHeartFloatUp(listOfHearts2);
        // setTimeout(() => {
        //     for (let index = 0; index < listOfHearts2.length; index++) {
        //         let heart = listOfHearts2[index];
        //         heart.remove();
        //     }


        // }, 50000);
    }

    async function makeHeartFloatUp(listOfHearts2) {
        //make the heart float up
        var hearts = listOfHearts2;
        while (hearts.length > 0) {
            for (var i = 0; i < hearts.length; i++) {
                var heart = hearts[i];
                heart.style.top = heart.offsetTop - Math.random(10, 100) + 'px';
                
            }
            await new Promise(r => setTimeout(r, 1));
        }
            
    }



    return (

        
        // center this div in the middle of the page

        <div className="Home" >
            { myIP === '' || loaded===false ? <div>Loading...</div> :
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                <span id='text-count' >It's been {years} years, {months} months, {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds since he joined the military service!</span>
                <br />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
                <h1><i>There are</i> {count} <i> people who miss him</i></h1>
                <br />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
            {canClick?
                <button onClick={() => {
                                showHeartEffect();
                                
                            //check can click one more time for sure
                                if (clickedIPs.includes(myIPRealData)) {
                                    console.log("my ip = " + myIPRealData);
                                    console.log("clickedIPs = " + clickedIPs);
                                    alert("You have already clicked this button today! Visit again tomorrow!");
                                    setCanClick(false);
                                    return;

                                }
                               

                    setCount(count + 1);
                    setCanClick(false);
                    console.log("count " + count);
                                

                    
                    //then update the file love-count.json
                        var data = { count: count + 1 };
                        var ips2 = clickedIPs.concat(myIP);
                        data.IPs = ips2;
                        data.date = new Date().toDateString();
                    var json = JSON.stringify(data);
                    
                    //then update the file love-count.json

                    fetch('https://api.jsonbin.io/v3/b/65e3ea5adc74654018ace96f', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Master-Key': '$2a$10$UhgI0u9jA/3QQnEW01EAPOXlK5oBj19b9kAyfzQ/SEs9pbISpYIBi',
                            'X-Acess-Key': '$2a$10$SCMCF5.iZl1tDduNAFiFZ.3pXZJUBuDbocxeKr/aQfXwJfXT/eaRu'
                        },
                        body: json
                    }).then(response => response.json()).then(data => {
                        console.log(data);
                    }
                    );



                    }}>I miss him</button>
                    :
                    <button onClick={() => {
                        alert("You have already clicked this button today! Visit again tomorrow!");
                        showHeartEffect();

                            
                    }}>I miss him</button>
                    }
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <img src={hao} alt="hao" style={{ width: '300px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '90px', marginBottom: '10px' }}>
                        <a style={{ marginLeft: '30px' }} href="/about">>Who is Hao</a>
                        <a style={{ marginLeft: '30px' }} href="/notes">>Notes</a>
                <a style={{ marginLeft: '30px' }} href="https://github.com/DinhHuynhTienPhu/day-counters">>Contribute to this project</a>
            </div>
            </div>
            }
        </div>
    );
}

export default Home;
