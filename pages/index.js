//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'

export default() => (
	<div>
	<Layout>
	    <h2>Welcome to my first dev porti!</h2>
	    <Image className="banner_Img" src="/static/headerimage.jpeg" alt="My image"/>
		<style jsx>{`
			h2 {
				margin-top: 25px;
				font-family: 'Roboto', 'sans-serif';
			}
			.banner_Img {
				margin: none;
				border: none;
				width: 100%;
			}
			`}
		</style>
		<style global jsx>{`
			body {
				text-align: center;
			}
			h2 {
				margin-top: 25px;
				margin-bottom: 25px;
			}
			.banner_Img {
				margin: none;
				border: none;
				width: 100%;
			}
			`}
		</style>
</Layout>
</div>
);