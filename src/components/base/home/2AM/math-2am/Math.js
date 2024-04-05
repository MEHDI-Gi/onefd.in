import './Math.css';
import Books from './Books';
import Exercise from './Exercise';
import YbChanel from './YbChanel';

function Math(){






    return(
        <div className='math' id='math'>
                <input type='radio' name='navIn' id='navId-1'/>
                <input type='radio' name='navIn' id='navId-2'/>
                <input type='radio' name='navIn' id='navId-3'/>
            <div className='nav'>
                <label id='bks' for='navId-1' ><h3>دروس</h3></label>
                <label id='exr' for='navId-2' ><h3>تمارين</h3></label>
                <label id='ybc' for='navId-3' ><h3>كتب</h3></label>
                <div className='under-line'></div>
            </div>
            <div className='content'>
                <YbChanel />
                <Exercise />
                <Books />
            </div>
        </div>
    )
}

export default Math;