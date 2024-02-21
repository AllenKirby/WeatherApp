import bg from '../assets/images/sky.jpg'
import Container from '../components/container'

const Home = () => {
    return(
        <main className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bg})` }}>
            <Container />
        </main>
    )
}

export default Home