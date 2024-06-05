import CountDownClock from '../components/CountDownClock'
import MissHim from '../components/MissHim'
import { useEffect } from 'react'



const HomePage = () => {
  useEffect(() => {
    console.log("I have been mounted")
    try {
      document.getElementById("backgroundMusic").play().catch((error) => {
        
        document.addEventListener('click', () => {
          console.log("User has interacted with the page")
          document.getElementById("backgroundMusic").play()
        }, { once: true })
      })
    } catch (error) {
      console.log("Error playing music", error)
    }
  }, [])


  return (
        <div className="hero min-h-[88vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <img src="./assets/hao.jpg" className="max-w-[11rem] rounded-lg shadow-2xl" />
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">HCH day counter</h1>
                    <p className="py-6">Hao Chi-Ha has left us for:</p>
                    <div className="flex justify-center">
                      <CountDownClock />
                  </div>
                
                  <MissHim />

                </div>
                
            </div>
      <audio id="backgroundMusic" loop autoPlay src="./assets/music.mp3" />
        </div>

   
  )
}

export default HomePage
