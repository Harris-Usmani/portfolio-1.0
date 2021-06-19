import '../Topbar/Topbar.scss'
import {Person, Mail} from '@material-ui/icons'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Harris U.</a>

                    <div className="itemContainer">
                        <Person />
                        <span> 32323 323</span>
                    </div>

                    <div className="itemContainer">
                        <Mail />
                        <span> harrisusmani@protonmail.com </span>
                    </div>


                </div>

                <div className="right">

                </div>
            </div>
            
        </div>
    )
}

export default Topbar;