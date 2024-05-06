export const Home = () => {
    return (
    <>
  <section className="banner" id="home">
    <div className="imgOnSide">
      <img src=".\src\assets\Images\sidebarimg.JPG" alt="" />
    </div>
    <div className="contentBox">
      <img className="logo" src=".\src\assets\Images\Mlogo.png" alt="" />
      <div>
        <h4>
          <span>Hello</span>, i'm
        </h4>
        <h2>Malin Nyberg</h2>
        <h4>I'm studying to become a fullstack developer .NET</h4>
        <p>
          As I navigate the complexities of .NET, I'm evolving into a fullstack
          developer who bridges the gap between robust backend logic and
          intuitive frontend designs.
        </p>
        <a href="#About" className="btn">
          About Me
        </a>
      </div>
      <ul className="sci">
        <li>
          <a href="https://github.com/MalinNyberg">
            <img src=".\src\assets\Images\github.png" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/malin-nyberg-0bb35313a/">
            <img src=".\src\assets\Images\linkedin1.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src=".\src\assets\Images\facebook.png" />
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section className="About" id="About">
    <div className="title white">
      <h2>About Me</h2>
    </div>
    <div className="content">
      <div className="textbox">
        <p>
          I am currently studying to become a Fullstack Developer in .NET. When
          graduated, I will have experience with Webdeveloping, SQL, SSMS, .NET,
          C#, Microsoft Azure, React, UX, CI/CD, HTML, CSS, JavaScript, Scrum,
          Agile , projectplaning and Git. In my previous roles, I excelled in
          service, sales, and marketing, including social media management,
          event planning, and project management. My passion for programming led
          me to pursue a career as a fullstack developer in IT. I am a driven,
          responsible, and goal-oriented individual with a positive and
          resilient attitude. I thrive in managing multiple tasks, leading
          projects from start to finish, and contributing effectively within a
          team. My commitment to customer satisfaction and team success has been
          a consistent theme throughout my career. Outside of work, my primary
          interest is football, a sport I've played since childhood. I am a
          dedicated team player, always ready to contribute. Additionally, I
          have diverse interests, including various sports as hockey and golf,
          fashion, computers, and music. When not on the field or coding, I
          enjoy spending time with family and friends.
        </p>
        <a
          href="Documents/MalinNybergCV.pdf"
          download="MalinNybergCV"
          className="btn"
        >
          Download My CV
        </a>
      </div>
      <div className="imgbox" id="imgbox">
        <img src=".\src\assets\Images\ppmedium.PNG" alt="" />
      </div>
    </div>
  </section>
  <section className="portfolio" id="portfolio">
    <div className="title">
      <h2>My Portfolio</h2>
      <p>Some of my recent projects. Go to my GitHub to see more.</p>
    </div>
    <div className="content">
      <div className="portfoliobx">
        <div className="imgbx">
          <a href="https://github.com/Manhattaa/Dreamify">
            <img src=".\src\assets\Images\Dreamify.jpg" />
          </a>
        </div>
        <div className="textbx">
          <h3>
            This project involves creating a music themed Minimal API that uses
            the Spotify Open Access API
          </h3>
        </div>
      </div>
      <div className="portfoliobx">
        <div className="imgbx">
          <a href="https://github.com/Adrozs/The_Bank">
            <img src=".\src\assets\Images\thebank.jpg" />
          </a>
        </div>
        <div className="textbx">
          <h3>
            A bank Console-app with Database connections made in C#. A group
            assignment for our final project in our first C#/.NET course.
          </h3>
        </div>
      </div>
      <div className="portfoliobx">
        <div className="imgbx">
          <a href="https://github.com/MalinNyberg/MiniProject--API">
            <img src=".\src\assets\Images\API.jpg" />
          </a>
        </div>
        <div className="textbx">
          <h3>My first small project laborating with creating an API</h3>
        </div>
      </div>
    </div>
  </section>
</>
    )
}