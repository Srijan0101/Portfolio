import "./Skills.css";

const Skills = () =>{

    return (

        <div id="skills" class="skills">
            <div class="skills-header">SKILLS</div>

            {/* Progress Bar */}
            <div class="skills-wrap animate__animated wow animate__fadeInLeft">
                <div class="skill-bars">
                <div class="bar">
                <div class="info">
                    <span>C++</span>
                </div>
                <div class="progress-line cpp">
                    <span></span>
                </div>
                </div>
                <div class="bar">
                <div class="info">
                    <span>JAVA</span>
                </div>
                <div class="progress-line java">
                    <span></span>
                </div>
                </div>
                <div class="bar">
                <div class="info">
                    <span>Javascript</span>
                </div>
                <div class="progress-line javascript">
                    <span></span>
                </div>
                </div>
                <div class="bar">
                <div class="info">
                    <span>MySQL</span>
                </div>
                <div class="progress-line mysql">
                    <span></span>
                </div>
                </div>
                <div class="bar">
                <div class="info">
                    <span>MERN</span>
                </div>
                <div class="progress-line mern">
                    <span></span>
                </div>
                </div>
            </div>

            {/* Pie Chart */}

            {/* <div className="container">
                <div className=""></div>
            </div> */}

        </div>            
        </div>            
    )
};

export default Skills;