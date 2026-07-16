import { Link } from "react-router-dom"
import '../css/Navbarcss.css'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">나를 소개</Link></li>
        <li><Link to="/">소개</Link></li>
        <li><Link to="/">소개</Link></li>
        <li><Link to="/">소개</Link></li>
        <li><Link to="/">소개</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar