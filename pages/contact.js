//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
  <Layout><h2>Want to Collab?</h2>
  <p className="centered">Want to ask me something or share some ideas? Let me know</p>
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
        width: 35%;
        margin: 5px auto;
        color: #435B86;
      }
      .centered{
        text-align: center;
        color: black;
        margin-top: 25px;
        width: 35%;
      }
      .contacts{
        margin-top: 25px;
      }
      a {
        color: #803FA6;
        font-weight: lighter;
      }
    `}
  </style>
  <div className="contacts">
  <p><strong>Email:</strong> anrolette.hollamby@gmail.com</p>
  <p><strong>Phone:</strong> 079 879 5894</p>
  <p><a href="https://www.linkedin.com/in/anrolette-hollamby-77a67b165/" target="_blank">LinkedIn</a></p>
  <p><a href="https://www.behance.net/Anrolette" target="_blank">Behance</a></p>
  <p><a href="https://github.com/Anrolette" target="_blank">Github</a></p>
  </div>
  </Layout>
)