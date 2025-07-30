import MoodCarousel from "../layout/MoodCarousel";

function Home(){
    return(
        <div className="home-page">
            <h1> Welcome to Sonara</h1>
            <p> Let the music take you beyond the ordinary. </p>
            <MoodCarousel/>
        </div>
    )
}

export default Home;