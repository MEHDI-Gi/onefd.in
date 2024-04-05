import './Header.css';
import Choices from './choices/Choices';
import './Onefd.png';

function Header(){
    return(
        <div id='header'>
            <div className='nav'>
                <div className='logo'>
                    <img src={require('./Onefd.png')}/>
                    <h2>ONEFD.in</h2>
                </div>
                <Choices />
            </div>
        </div>
    )
}


export default Header;