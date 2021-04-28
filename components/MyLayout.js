/* In our app, we'll use a common style across various pages. For this purpose, we can create a common 
Layout component and use it for each of our pages. Here's an example: 

Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would 
cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request 
to the server) we use Next.js’ Link API.*/
import Link from "next/link";
/*You can use this built-in component to append elements to the <head> element of the page. 
More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */
import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 30,
  padding: 20,
  border: "1px solid #DDD",
  color: "#000",
  fontWeight: "bolder",
  background: '#EBECEE',
  textAlign: 'center',
};


/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */
const Layout = (props) => (
  <div>
    <Head>
<script 
dangerouslySetInnerHTML={{ __html: 
`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M97GSM5');`
}}></script>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <div style={layoutStyle}>
    <noscript 
dangerouslySetInnerHTML={{ __html: 
`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M97GSM5"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
}}></noscript>
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;
