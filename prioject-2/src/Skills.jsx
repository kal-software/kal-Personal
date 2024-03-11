import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

function Skills(){
return (
    <>
    <div>
        <h1 className="myskills-h1">My Skills</h1>
        <p className="my-skills">Here are some of my skills that i am experianced</p>
        <div className="skill-icon">
        <img src="./kal.jpg" width={200} height={250} className="skill-img"/>
            <div>
            <FaHtml5 className="Html"/>
            <p className="html-p">HTML</p>
            </div>
            <div>
            <FaCss3Alt className="css"/>
            <p className="css-p">CSS</p>
            </div>
            <div>
            <TbBrandJavascript className="javascript"/>
            <p className="javascript-p">JAVASCRIPT</p>
            </div>
            <div>
            < FaReact className="react"/>
            <p className="react-p">REACT</p>
            </div>
           
                

        </div>
    </div>
    </>
)
}
export default Skills