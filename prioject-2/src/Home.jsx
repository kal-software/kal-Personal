import Projects from "./Projects"

function Home(){
    function addAction(){
        <Projects/>
    }
return(
    <>
    <div className="home-c">
        <div className="left-div-container">
        <p className="hello">Hello!</p>
        <h3 className="iam"><span>I'm </span>Kalkidan<br/>Solomon</h3>
        <p className="soft">Software Engineering Student</p>
        <button className="hire">Hire Me</button>
        <button className="mywork" ><a href="./Projects">My Works</a></button>
        </div>
        <div className="image1-div">
            <img src="./kal.jpg" width={400} height={450} className="home-image"/>
        </div>

    </div>
    </>
)
}
export default Home