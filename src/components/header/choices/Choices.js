

function Choices() {

    let levelsData = [
        'التانية متوسط',
        'الثالثة متوسط',
        'الرابعة متوسط',
        'الاولى ثانوي',
        'التانية ثانوي',
        'الثالثة ثانوي',];
    let matiersData = [
        'الرياضيات',
        'اللغة العربية',
        'اللغة الانجليزية',
        'اللغة الفرنسية',
        'العلوم الفيزيائية و التكنولوجيا',
        'العلوم الطبيعية',
        'التربية المدنية',
        'التاريخ و الجغرافيا',
        'التربية الإسلامية',
        'التربية الموسيقية',
        'الإعلام الآلي',
        'التربية الفنية التشكيلية',
        'اللغة الأمازيغية',]
    let levelNameL = document.getElementById('title-title');

    //let levelTitle = document.querySelector('.choice .title');
    //let ulValue = document.querySelector('.choice ul li');

    let levelList = document.getElementById('level-list');
    function LevelShow() {
    };
    function SecondM(){
        levelNameL.innerHTML = 'التانية متوسط';
        document.querySelector('.choices .title').style.backgroundColor = '#a5b8c7'
    }

    return (
        <div className='choices'>
                <div onClick={LevelShow} className='title'><h4 id='title-title'>المستوى</h4></div>
                <div id='level-list' className="level-list">
                    <ul>
                        <li onClick={SecondM}><h4>التانية متوسط</h4></li>
                        <li><h4>الثالثة متوسط</h4></li>
                        <li><h4>الرابعة متوسط</h4></li>
                        <li><h4>الاولى ثانوي</h4></li>
                        <li><h4>التانية ثانوي</h4></li>
                        <li><h4>الثالثة ثانوي</h4></li>
                    </ul>
                </div>
        </div>
    )

};



export default Choices;