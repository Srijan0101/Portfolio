import "./Header.css"

const Header = () =>{
    return (

        <nav class="navbar navbar-light ">   {/* add sticky-top to class for sticky navbar */}
        <div class="container-fluid">
            <a class="navbar-brand animate__animated wow animate__pulse">SB</a>

            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link nl" aria-current="page" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nl" href="#project">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nl" href="#skills">Skills</a>
                </li>
    
            </ul>
        </div>
        </nav>
    
    )
};

export default Header;