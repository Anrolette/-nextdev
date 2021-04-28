//Import the Link API to support client-side navigation
import Link from "next/link";
import Layout from "../components/MyLayout";


export default() => (
  <Layout>
    <h2>These are some of my projects</h2>
    <style jsx>
      {`
        h2 {
          margin-top: 25px;
          font-family: "Roboto", "sans-serif";
        }
        h3 {
          font-size: 1.5em;
        }
        .banner_Img {
          margin: none;
          border: none;
          width: 100%;
        }
        p {
          font-weight: lighter;
          font-size: 1em;
          text-align: justify;
          width: 50%;
          margin: 25px auto;
        }
        .project {
          width: 30%;
          margin: 5px;
          display: inline-block;
          vertical-align: top;
        }
        .project-img {
          width: 90%;
          margin: 20px auto 15px;
        }
        .project > p {
          width: 90%;
        }
      `}
    </style>
    <div className="project">
    <img className="project-img" src="/static/1.jpg" alt=""/>
      <h3>Memory Game</h3>
      <p>
        Match all the tiles in sets of 2. Match all 8 sets to Win the game. You
        only have 10 tries to match all the tiles. Restart the game at any point
        by clicking the reset button. Enjoy!
      </p>
      <p>
        <a href="https://boiling-lake-01342.herokuapp.com/" target="_blank">
          Access here!
        </a>
      </p>
    </div>
    <div className="project">
    <img className="project-img" src="/static/2.jpg" alt=""/>
      <h3>Weather App</h3>
      <p>
        Type in your or any city into the search bar. The temp, conditions and
        date will be displayed. The app background dynamically changes depending
        on the temprature of the current city
      </p>
      <p>
        <a href="https://github.com/Anrolette/Weather-App" target="_blank">
          Access here!
        </a>
      </p>
    </div>
    <div className="project">
    <img className="project-img" src="/static/3.jpg" alt=""/>
      <h3>React Library App</h3>
      <p>
        Search for any movie, podcast, music, audiobook, short film, TV show,
        software ebook are all. Choose how many result you'd like to see. Tap on
        the heart button of any result you would like to add to your Favorites
        library. Click on the heart icon to view and delete items from your
        Favorites library
      </p>
      <p>
        <a href="https://github.com/Anrolette/my-library" target="_blank">
          Access here!
        </a>
      </p>
    </div>
    <div className="project">
    <img className="project-img" src="/static/4.jpg" alt=""/>
      <h3>1st Online Resume</h3>
      <p>This is a short description</p>
      <p>
        <a
          href="https://github.com/Anrolette/Anrolette_Hollamby_Resume"
          target="_blank"
        >
          Access here!
        </a>
      </p>
    </div>
    <div className="project">
    <img className="project-img" src="/static/5.jpg" alt=""/>
      <h3>1st Online Store</h3>
      <p>
        This project is a concept for an online designer furniture store. new
        products can be added. It includes a quick add to cart function. The
        cart page has javascipt to dynamically adjust the pricec total according
        to qty's, VAT and whether a specific coupon was applied.
      </p>
      <p>
        <a href="https://github.com/Anrolette/allOnline" target="_blank">
          Access here!
        </a>
      </p>
    </div>
  </Layout>
);
