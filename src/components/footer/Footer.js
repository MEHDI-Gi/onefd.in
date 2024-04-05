
import './Footer.css'

const linksShow = () => {
    document.getElementById('links').style.display = 'block';
    document.getElementById('home').style.display = 'none';

}
const homeShow = () => {
    document.getElementById('home').style.display = 'block';
    document.getElementById('links').style.display = 'none';


}
function Footer(){
    return(
            <div className="footer">

                <div className="sections">
                        <input id='in1' type='radio' name='gr'/>
                        <input id='in2' type='radio' name='gr'/>
                        <div className='top-line'></div>
                        <label onClick={homeShow} id="homeIcon" class="fa-solid fa-house" for='in1'  />
                        <label onClick={linksShow} id="linksIcon" class="fa-solid fa-link"  for='in2' />
                </div>
            </div>
    )
}

export default Footer;