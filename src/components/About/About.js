import "./About.css"

const About = () =>{
    return (

        <div id="about" class="about">
            
            <div class="abt-wrap">

            <div class="abt-header">ABOUT ME</div>
            <div class="abt-text1">
                My name is Srijan Bhardwaj. I am currently a BTech Sophomore at NIT Kurukshetra. 
                I live in Faridabad, Haryana. 
                I am quite interested in Web Development and Competitive Programming. The purpose of this
                portfolio is to showcase some of my work.
                I am also an avid learner and try to learn something new everyday.
            </div>

            <div class="abt-text2 ">
                Interested?? Check out my work
                <a href="#project"><button type="button" class="btn btn-outline-dark work-btn animate__animated wow animate__pulse">Projects</button></a>
            </div>
            </div>
            
        </div>
            
    )
};

export default About;