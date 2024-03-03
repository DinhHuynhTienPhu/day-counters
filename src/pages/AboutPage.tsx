
const AboutPage = () => {
    return (
        <div className="ps-[2rem] pt-3 h-[89vh] max-h-[88vh] overflow-y-scroll" >
            <div className="text-center">
                <h1 className="text-4xl font-bold">About</h1>
            </div>
        <div className="divider"></div>
        <div className="flex flex-col gap-5">
            <div>
            <h3 className="text-2xl font-bold">Who is Hao? </h3>
            <p>Hao is a friend of mine. He joined the military service in 2024 and has been serving since then. We miss him a lot and we hope he comes back soon.</p>
            </div>
            <div>
            <h3 className="text-2xl font-bold">Why did I make this website?</h3>
            <p>
                I made this website to keep track of how long it has been since he joined the military service. I hope he comes back soon.
            </p>
            </div>
            <div>
            <h3 className="text-2xl font-bold">Why did he get so much love from us</h3>
            <p>
                He is a very kind and caring person. He is always there for us when we need him. He is also very funny and makes us laugh all the time. 
                <br />
                Hao has a youtube channel where he shares his knowledge and experience. You can check it out <a className="link link-primary" href="https://www.youtube.com/@BlueShadow792001/videos">here</a>.
                Hao is a game developer and he has a lot of cool projects. He has worked at VNG, a big game company in Vietnam for about 2 years.
                <br />
                We love him because he always want to share his knowledge and experience with us. He is a very good teacher and he is always there for us when we need him.
                He is also very smart and a hard-working student. He is always the top of his class and he is always there to help us when we need him.
                Some of his achievements:
                <ul>
                    <li>Got a scholarship for being top 5 in his class</li>
                    <li>Graduated with GPA = 9.1 </li>
                    <li>Many cool projects on his facebook. Including A* in minecraft, Image to maze,... <a className="link link-primary" href="https://www.facebook.com/hachihao792001">here</a></li>
                </ul>
            </p>
            </div>
        </div>
        </div>
    );
}

export default AboutPage