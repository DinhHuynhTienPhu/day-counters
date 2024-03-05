import { useState } from 'react';
const apiurl = 'https://simple-server-4et5.onrender.com/count';
function MissHim() {

    const [count, setCount] = useState(0);
    const [myIP, setMyIP] = useState('');
    const [canClick, setCanClick] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [clickedIPs, setClickedIPs] = useState([]);
    const [needToLoad, setNeedToLoad] = useState(true);
    const load = (() => {
        if (needToLoad === false) return;
        setNeedToLoad(false);
        //get my ip
        fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => {
            console.log(data.ip);
            setMyIP(data.ip);
        }).then(() => {
            fetch(apiurl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*'
                }
            }).then(response => response.json()).then(data => {
                console.log(data);
                setCount(data.count);
                //eslint-disable-next-line
                setClickedIPs(data.IPs);


                var date = data.date;

                var today = new Date();

                if (date !== today.toDateString()) {

                    console.log("date is not today, reset the IPs");
                    //reset the "date" field to today
                    data.date = today.toDateString();
                    data.IPs = [];
                    var json = JSON.stringify(data);

                    fetch(apiurl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': '*'
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


                    if (clickedIPs.includes(myIP)) {
                        console.log("my ip = " + myIP);

                        setCanClick(false);
                        setLoaded(true);

                    }
                    else {
                        console.log("my ip = " + myIP);
                        setCanClick(true);
                        setLoaded(true);

                    }

                }

            });
        });


    });

    load();



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

            heart.style.fontSize = Math.random() * 100 + Math.random(10, 100) + 'px';
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
                if (heart !== null) heart.remove();



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
            {myIP === '' || loaded === false ? <div>Loading...</div> :
                <div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
                        <h1><i>There are</i> {count} <i> people who miss him</i></h1>
                        <br />

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
                        {canClick ?
                            <button className="btn btn-secondary" onClick={() => {
                                showHeartEffect();
                                console.log("clickedIPs to check= " + clickedIPs);
                                console.log("my ip to check= " + myIP);

                                //check can click one more time for sure
                                if (clickedIPs.includes(myIP)) {
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

                                fetch(apiurl, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Headers': '*'
                                    },
                                    body: json
                                }).then(response => response.json()).then(data => {
                                    console.log(data);
                                }
                                );



                            }}>I miss him</button>
                            :
                            <button className="btn  btn-active btn-secondary" onClick={() => {
                                alert("You have already clicked this button today! Visit again tomorrow!");
                                showHeartEffect();


                            }}>I miss him</button>
                        }
                    </div>
                    
                </div>
            }
        </div>
    );
}

export default MissHim;
