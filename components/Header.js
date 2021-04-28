import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  color: "#803FA6",
  fontWeight: "lighter",
}

//header coponent with all links to display on all pages
//linkStyle is declared above and applied to each link
const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link>
    </div>
)

export default Header