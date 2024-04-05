import './Home.css';
import SecondMiddle from './2AM/SecondMiddle';
import Category from './category/Category'



function Home(){
    return(
        <div className='home' id='home'>
            <Category />
            <SecondMiddle />
        </div>
    )
}

export default Home;