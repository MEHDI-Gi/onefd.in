import './Links.css'

function Links(){
    const Almilam = () => {

        let element = document.getElementById("scoLar");
        
        element.style.height = element.style.height === '215px' ? '' : '215px';
    };
    return(
        <div id="links">
            <h5>روابط خارجية</h5>
            <ul>
                <li><div className="title"><a target="_blank" rel="noreferrer" href="https://www.onefd.edu.dz/">الموقع الرسمي</a></div></li>
                <li><div className="title"><a target="_blank" rel="noreferrer" href="http://inscriptic.onefd.edu.dz/preinscription/">موقع التسجيل</a></div></li>
                <li><div className="title"><a target="_blank" rel="noreferrer" href="https://www.onefd.edu.dz/att_niv_2023/">23/22 شهادة إثبات المستوى</a></div></li>
                <li><div onClick={Almilam} className="title"><a>المعلام</a></div>
                    <div id="scoLar" className="scolar">
                            <a target="_blank" rel="noreferrer" href="http://scolarium-moyen.onefd.edu.dz/login/index.php" >التعليم المتوسط</a>
                            <a target="_blank" rel="noreferrer" href='http://scolarium-1as.onefd.edu.dz/'>اﻟﺴﻨﺔ الاولى  ثانوي</a>
                            <a target="_blank" rel="noreferrer" href='http://scolarium-2as.onefd.edu.dz/'>اﻟﺴﻨﺔ الثانية  ثانوي</a>
                            <a target="_blank" rel="noreferrer" href='http://scolarium-3as.onefd.edu.dz/'>اﻟﺴﻨﺔ اﻟﺜﺎﻟﺜﺔ ثانوي</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Links;