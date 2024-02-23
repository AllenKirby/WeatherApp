import { useEffect, useState } from 'react'

import mist from '../assets/images/mist.jpg'
import defaultBg from '../assets/images/sky.jpg'
import sunny from '../assets/images/sunny.jpg'
import clouds from '../assets/images/clouds.jpg'
import drizzle from '../assets/images/drizzle.jpg'
import snow from '../assets/images/snow.jpg'
import rainy from '../assets/images/rainy.jpg'

import Container from '../components/container'


const Home = () => {
    const [weatherStatus, setweatherStatus] = useState('')
    const [bgImage, setbgImage] = useState('')

    useEffect(()=> {
        if(!weatherStatus){
            setbgImage(`url(${defaultBg})`)
        }
        else if(weatherStatus == 'Clear'){
            setbgImage(`url(${sunny})`)
        }
        else if(weatherStatus == 'Clouds'){
            setbgImage(`url(${clouds})`)
        }
        else if(weatherStatus == 'Drizzle'){
            setbgImage(`url(${drizzle})`)
        }
        else if(weatherStatus == 'Snow'){
            setbgImage(`url(${snow})`)
        }
        else if(weatherStatus == 'Mist'){
            setbgImage(`url(${mist})`)
        }
        else if(weatherStatus == 'Rain'){
            setbgImage(`url(${rainy})`)
        }
    }, [weatherStatus])

    const handleWeatherData = (data) => {
        setweatherStatus(data)
    }
    return(
        <main className="h-screen w-full bg-cover flex items-center justify-center" style={{ backgroundImage: bgImage }}>
            <Container onData={handleWeatherData}/>
        </main>
    )
}

export default Home