//Import the Link API to support client-side navigation
import Link from "next/link";
import Layout from "../components/MyLayout";

export default () => (
  <Layout>
    <h2>This is the About page</h2>
    <style jsx>
      {`
        h2 {
          margin-top: 25px;
          font-family: 'Roboto', 'sans-serif';
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
      `}
    </style>
    <p>
      I am a creative designer and UI/UX practitioner with over 9 years
      experience in Visual Communication Design. My interests in Visual Design, Copywriting and multi-channel marketing as
      well as my need to keep learning has led me to become a developing Web Developer and constant scholar.
    </p>
    <p>
      I completed my N.Dip Graphic Design in 2010 at TUT (Tswhane University of Technology) and I am currently busy with a
      B.Com Marketing Management Degree at Boston City Campus. I have also completed various short courses, including
      Introduction to User Expereince Design from Georgia Tech on Coursera and HTML/CSS: Making Webpages on Khan Academy.
    </p>
  </Layout>
);
