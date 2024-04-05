function Welcome(){
     setTimeout(() => {
         document.getElementById('welcome').style.display = 'none'
     }, '5000');
    return(
        <div id="welcome">
                <div className='logo'>
                    <img src={require('./header/Onefd.png')}/>
                    <h2>ONEFD.in</h2>
                </div>
                <i class="fa-solid fa-circle-notch"></i>
        </div>
    )
}
export default Welcome;