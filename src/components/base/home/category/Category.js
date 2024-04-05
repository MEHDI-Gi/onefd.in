import './Category.css'
function Category(){

const Math = () => {
    document.getElementById('matiere').style.translate = '0%';
}
const Arabic = () => {
    document.getElementById('matiere').style.translate = '-33.333%'

}
const English = () => {
    document.getElementById('matiere').style.translate = 'calc(-33.333% * 2)'

}
    return(
        <div id="category">
            <div className="category-list">
                    <input id='inp-01' type='radio' name='inn'/>
                    <input id='inp-02' type='radio' name='inn'/>
                    <input id='inp-03' type='radio' name='inn'/>
                    <input id='inp-04' type='radio' name='inn'/>
                    <input id='inp-05' type='radio' name='inn'/>
                    <input id='inp-06' type='radio' name='inn'/>
                    <input id='inp-07' type='radio' name='inn'/>
                    <input id='inp-08' type='radio' name='inn'/>
                    <input id='inp-09' type='radio' name='inn'/>
                <ul>
                    <li><label for='inp-01'  onClick={Math}><h4 id='math-title'>الرياضيات</h4></label></li>
                    <li><label for='inp-02'  onClick={Arabic}><h4 id='arabic-title'>اللغة العربية</h4></label></li>
                    <li><label for='inp-03'  onClick={English}><h4 id='english-title'>اللغة الانجليزية</h4></label></li>
                    <li><label for='inp-04'  ><h4 id='french-title'>اللغة الفرنسية</h4></label></li>
                    <li><label for='inp-05'  ><h4 id='physic-title'>العلوم الفيزيائية و التكنولوجيا</h4></label></li>
                    <li><label for='inp-06'  ><h4 id='science-title'>العلوم الطبيعية</h4></label></li>
                    <li><label for='inp-07'  ><h4 id='madania-title'>التربية المدنية</h4></label></li>
                    <li><label for='inp-08'  ><h4 id='hisGeo-title'>التاريخ و الجغرافيا</h4></label></li>
                    <li><label for='inp-09'  ><h4 id='islamic-title'>التربية الإسلامية</h4></label></li>
                </ul>
            </div>
        </div>
    )
}

export default Category;