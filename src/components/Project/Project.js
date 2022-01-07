import "./Project.css";
import amazon from "./images/amazon.PNG";
import movieApp from "./images/movie-app.PNG";
import cardGame from "./images/card.PNG";
import college from "./images/college.PNG";
import vidChat from "./images/vid-chat.PNG";

const Project = () => {
  return (
    <div id="project" class="project">
      <div class="pro-wrap">
        <div class="pro-header">PROJECTS</div>
        <div class="pro-component-wrap">
            <div className="pc animate__animated wow animate__slideInLeft">
                <a href="https://my-e4355.web.app" target="_blank" rel="noreferrer">
                    <img src={amazon} alt="amazon"/>
                    <div className="project-data">
                        <div className="project-data-heading">Amazon Clone</div>
                        <div className="project-data-content">
                        <span style={{color: "grey"}}>React.js | Stripe.js | Firebase</span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="pc  animate__animated wow animate__fadeInUp">
                <a href="https://movie-app-c9438.web.app/" target="_blank" rel="noreferrer">
                    <img src={movieApp} alt="movie app"/>
                    <div className="project-data">
                        <div className="project-data-heading">Movie App</div>
                        <div className="project-data-content">
                           
                        <span style={{color: "grey"}}>React | MovieDB API | Firebase | Material-ui</span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="pc  animate__animated wow animate__fadeInRight">
                <a href="https://salty-citadel-31663.herokuapp.com" target="_blank" rel="noreferrer">
                    <img src={vidChat} alt="video chat app"/>
                    <div className="project-data">
                        <div className="project-data-heading">Video Chat app</div>
                        <div className="project-data-content"><span style={{color: "grey"}}>Nodejs | UUID | Peerjs | Socket.io</span></div>
                    </div>
                </a>
            </div>
            <div className="pc  animate__animated wow animate__fadeInLeft">
                <a href="https://srijan0101.github.io/Frontend-Projects/Day10/index.html" target="_blank" rel="noreferrer">
                    <img src={cardGame} alt="memory card game"/>
                    <div className="project-data">
                        <div className="project-data-heading">Card Flip Game</div>
                        <div className="project-data-content"><span style={{color: "grey"}}>HTML | CSS | JS</span></div>
                    </div>
                </a>
            </div>
            <div className="pc  animate__animated wow animate__fadeInRight">
                <a href="https://srijan0101.github.io/College-Website/" target="_blank" rel="noreferrer">
                    <img src={college} alt="college"/>
                    <div className="project-data">
                        <div className="project-data-heading">College Website</div>
                        <div className="project-data-content"><span style={{color: "grey"}}>HTML | CSS | JS</span></div>
                    </div>
                </a>
            </div>
            
            
        </div>
      </div>
    </div>
  );
};

export default Project;
