import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { FaComment, FaGithub, FaInstagram, FaLinkedin, FaShareSquare, FaThumbsUp, FaUser, FaWhatsapp } from 'react-icons/fa'
import './Homepage.css';
const HomePage = () => {
 
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    // Save preference in local storage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, []);

 
  return (
    <>
      {/* Navbar */}
      <Navbar  expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className='portfolio-name' href="#home">sourav saran</Navbar.Brand>
          {/* <button className='navbar-toggle'> */}
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          {/* </button> */}
          
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {/* <Nav.Link href="#about">About</Nav.Link> */}
              <Nav.Link as={Link} to="#about">About</Nav.Link>
              <Nav.Link as={Link} to="#projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <button className='togglebutton' onClick={toggleDarkMode} style={{
         

         }}>
        changeTheme
      </button>
      {/* Main Section */}
  
      <div className='text-center mainsection py-5'>
     {/* <Container fluid className="text-center bg-light py-5 "> */}
    
          <h1 className="display-4">sourav saran</h1>
          <p className="lead playwrite-de-grund">
            I'm a passionate developer with a focus on web development and design.
          </p>
          <a className='view-project' href="#projects" variant="primary"
          // style={{
          //   backgroundColor:'black',
          //   color:'white'
          // }}
          >
            View Projects
          </a>
         
        {/* </Container> */}
        </div>
        
  

      {/* About Section */}
      <div id="about" className=" playwrite-de-grund my-5 mx-5">
        <h2>About Me</h2>
        <p >
    Hi! I’m <strong>Sourav</strong>, a third-year B.Tech student at Netaji Subhas University of Technology (NSUT), pursuing my passion for web development. Throughout my studies, I have gained a solid foundation in programming and software development principles.

    I am particularly interested in creating dynamic and user-friendly web applications. My coursework has equipped me with skills in front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end development with Node.js, Express.js, and MongoDB. I enjoy tackling challenges and have developed strong problem-solving skills that help me find innovative solutions.

    In addition to my academic work, I have worked on several personal projects, including " <strong>Online Judge</strong>", a web-based application where users can write and compile code. These experiences have fueled my enthusiasm for continuous learning and growth in the field of technology.

    When I’m not coding, I love solving puzzles, exploring new tech trends, participating in hackathons, and collaborating on open-source projects. I’m excited to connect with others who share my passion for technology and to explore opportunities for internships or collaborative projects.
</p>
      </div>

      {/* Projects Section */}
      <Container id="projects" className="my-5 playwrite-de-grund">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul style={{listStyle:'none'}}>
          <li><div>
          <section id="codehub" className='playwrite-de-grund'>
    <h2>CodeHub.com</h2>
    <img src="codehub.png" alt="CodeHub.com Screenshot" 
    style={{
      maxWidth: '100%',
      height:'auto',
      display:'block',
      margin:'0 auto',

    }}/>
    <p>
        CodeHub.com is an online judge platform designed for developers and programmers to compile, submit, and evaluate code submissions in various programming languages. The application aims to facilitate learning and competition in coding through an efficient and user-friendly interface.
    </p>

    <h3>Key Features:</h3>
    <ul>
        <li><strong>Code Compilation:</strong> Users can write code in multiple programming languages and compile it directly within the platform.</li>
        <li><strong>Code Submission:</strong> Easy submission process for users to upload their code for evaluation against predefined test cases.</li>
        <li><strong>Verdict Generation:</strong> The system automatically evaluates submitted code and generates verdicts such as "Accepted," "Wrong Answer," or "Time Limit Exceeded," providing instant feedback to users.</li>
        <li><strong>Admin Features:</strong> Administrators can manage users, view submissions, and modify problem statements, ensuring smooth operation and maintenance of the platform.</li>
    </ul>

    <h3>Technologies Used:</h3>
    <ul>
        <li><strong>Docker:</strong> Leveraged Docker containers for environment isolation, making it easier to manage and deploy the application reliably across different environments.</li>
        <li><strong>AWS:</strong> Deployed the application on Amazon Web Services (AWS) for scalable and secure hosting, ensuring high availability and performance.</li>
    </ul>

    <h3>Conclusion:</h3>
    <p>
        CodeHub.com is an innovative solution for coding enthusiasts and competitive programmers, offering a seamless experience for code evaluation. Its robust architecture and cloud-based deployment make it a reliable tool for learning and honing programming skills.
    </p>
    <p >
        Check out the project live: <a className='link' href="https://codehub.org.in" target="_blank" rel="noopener noreferrer">Visit CodeHub.com</a>
    </p>
</section>
<hr style={{border: '1px solid #ccc', margin: '40px 0'}}/>


            </div></li>
          <li><div>
          <section id="recipe-book" className='playwrite-de-grund'>
    <h2>Recipe Book</h2>
    <img src="RecipeBook.png" alt="Recipe Book Screenshot"
     style={{
      maxWidth: '100%',
      height:'auto',
      display:'block',
      margin:'0 auto',

    }}
    />
    
    <p>
        Recipe Book is an interactive web application designed to unite cooking enthusiasts, allowing users to share their secret recipes with the world. This platform serves as a valuable resource for both seasoned cooks and those looking to improve their culinary skills.
    </p>

    <h3>Key Features:</h3>
    <ul>
        <li><strong>Recipe Sharing:</strong> Users can easily upload and share their own recipes, contributing to a vibrant community of culinary creators.</li>
        <li><strong>Explore Recipes:</strong> Discover a diverse range of recipes from other users, complete with options to like, share, and comment, fostering engagement and interaction.</li>
        <li><strong>Favorites:</strong> Save your favorite recipes for quick access, making meal planning effortless and enjoyable.</li>
        <li><strong>Learning and Inspiration:</strong> Beginners can learn from experienced cooks, gaining insights into new techniques and flavors, while experienced users can showcase their talents.</li>
    </ul>

    <h3>Purpose:</h3>
    <p>
        The goal of Recipe Book is to empower home cooks by facilitating the exchange of culinary knowledge. Whether you’re looking to impress at dinner parties or simply want to try something new, Recipe Book is your go-to platform for inspiration and creativity in the kitchen.
    </p>
    
    {/* <p>
        Check out the project live: <a href="https://your-project-url.com" target="_blank" rel="noopener noreferrer">Visit Recipe Book</a>
    </p> */}
    
    <hr />
</section>
{/* <hr style={{border: '1px solid #ccc', margin: '40px 0'}}/> */}
            </div></li>
          
          {/* <li>Project 3: Description</li> */}
        </ul>
      </Container>

      {/* Contact Section */}
      <Container id="contact" className="my-5 playwrite-de-grund">
        <h2>Contact Me</h2>
       
          
            <p>If you'd like to get in touch, you can reach me via:</p>
            <ul>
                <li>Email: <a className='link' href="mailto:souravsaran155@gmail.com">souravsaran155@gmail.com</a></li>
                <li>LinkedIn: <a className='link' href="https://www.linkedin.com/in/sourav-saran" target="_blank" rel="noopener noreferrer">linkedin.com/in/sourav-saran</a></li>
                <li>GitHub: <a className='link' href="https://github.com/souravsaran" target="_blank" rel="noopener noreferrer">github.com/souravsaran</a></li>
                <li >Phone no:<spam className='phone-number'> +918076423683</spam></li>
            </ul>
            <p>I look forward to hearing from you!</p>
     
        <p>If you'd like to get in touch, feel free to contact me via email or social media!</p>
      </Container>

      {/* Footer */}
      <div className="footer  text-center py-3 playwrite-de-grund ">
        <p>© sourav saran | All Rights Reserved</p>
        <div className="social-icons">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='socialIcons'/>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='socialIcons'/>
                    </a>
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className='socialIcons'/>
                    </a>
                    <a href="https://wa.me/8076423683" target="_blank" rel="noopener noreferrer">
                       
                        <FaWhatsapp className='socialIcons'/>
                    </a>
                </div>
      </div>
    </>
  );
};

export default HomePage;
