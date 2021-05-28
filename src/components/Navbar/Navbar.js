import arrow from '../../assets/back.png';
import './Navbar.css';
import { useHistory } from 'react-router-dom'

const Navbar =()=>{
    let history = useHistory();

    function handleClick() {
        history.push('/principal');
    }

    return(
        <div className='navbar'>
            <img onClick={handleClick} src={arrow} className="return" alt="return" />            
        </div>
    )
}

export default Navbar;
