import {Link} from 'react-router-dom'
import "../../../css/Navbar.css"
import { useState } from 'react'
const Navbar = () => {
    var [dropdown,showDropdown] = useState(false)
    const toggleDroupdown=()=>{
        showDropdown(droupdown=>!droupdown);
    }
    return(
        <header>
        <nav>
        <ul>
            <li><Link class="link" to="/">Home</Link></li>
            <li><Link class="link" to="/About">About</Link></li>
            <li><Link class="link" to="/Contact">Contact</Link></li>
            <li><Link class="link" to="/Gallery">Gallery</Link></li>
            <div>
                <span onMouseEnter={toggleDroupdown} >Hooks</span>
               {dropdown && (<ol onMouseLeave={toggleDroupdown}>
                    <li><Link to="/use-state" target='_blank'>userState</Link></li>
                    <li><Link class="link" to="/UseState">UseState</Link></li>
                    <li><Link class="link" to="/UseEffect">UseEffect</Link></li>
                    <li><Link class="link" to="/UseEffectAPI">UseEffectAPI</Link></li>
                    <li><Link to="/useimg" class="link">useAPIimg</Link></li>
                    <li><Link to="/UseReducer" class="link">UseReducer</Link></li>
                    <li><Link to="/UseRef" class="link">UseRef</Link></li>
                    <li><Link to="/UseMemo" class="link">UseMemo</Link></li>
                    <li><Link to="/UseCallback" class="link">UseCallback</Link></li>
                    <li><Link to="/ReactLifecycleMethods" class="link">ReactLifecycleMethods</Link></li>
                    <li><Link to="/Student" class="link">Student</Link></li>
                </ol>)}
            </div>
            <li><Link to="/Memo" class="link">React.memo</Link></li>
            <li><Link class="link" to="/Signup">Signup/login</Link></li>
        </ul>
        </nav>
        </header>
    )
}
export default Navbar; 