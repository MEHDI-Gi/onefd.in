function SectionOne(){

    return(
        <div className="section-1">
            <div className='lists'>
                <div className='title'><h2>كتب</h2></div>
                <div className="list">
                    <div className="list-title"><h3>الفصل الاول</h3></div>
                    <ul className="envoi-1">
                        <li><a href="http://scolarium-moyen.onefd.edu.dz/mod/resource/view.php?id=4181"><h3>الجزء 01</h3></a></li>
                        <li><a href="http://scolarium-moyen.onefd.edu.dz/mod/resource/view.php?id=4182"><h3>الجزء 02</h3></a></li>
                        <li><a href="http://scolarium-moyen.onefd.edu.dz/mod/resource/view.php?id=4183"><h3>الجزء 03</h3></a></li>
                        <li><a href="http://scolarium-moyen.onefd.edu.dz/mod/resource/view.php?id=4185"><h3>الجزء 04</h3></a></li>
                        <li><a href="http://scolarium-moyen.onefd.edu.dz/mod/resource/view.php?id=4184"><h3>الجزء 05</h3></a></li>
                        <li><a href="http://scolarium-moyen.onefd.edu.dz/mod/resource/view.php?id=4186"><h3>الجزء 06</h3></a></li>
                    </ul>
                </div>
            </div>
                        <div className="lists" >
                <div className="title"><h2>قنوات يوتوب</h2></div>
                <div id="youtube-chanel">
                    <ul>
                        <h4>الحصة رقم 01</h4>
                        <li onClick={ExNum1}>
                            <div className="title">
                                <h3>اجراء سلاسل عمليات تتضمن الجمع والطرح والضرب</h3>
                            </div>
                            <div className="video" id="vid-num-1">
                                <iframe  src="https://www.youtube.com/embed/XUsCHF8KOPQ?si=wtUWpqOwyYT96bOG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 02</h4>
                        <li onClick={ExNum2}>
                            <div className="title" >
                                <h3>اجراء سلسلة عمليات بدون أقواس</h3>
                            </div>
                            <div className="video" id="vid-num-2">
                                <iframe  src="https://www.youtube.com/embed/SUSP-cXRFXc?si=hdF5S7UlPpdew0OJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 03</h4>
                        <li onClick={ExNum3}>
                            <div className="title">
                                <h3>اجراء سلسلة عمليات تتضمن أقواس</h3>
                            </div>
                            <div className="video" id="vid-num-3">
                                <iframe  src="https://www.youtube.com/embed/L_ZhUiOFtvw?si=tV6EacZxYvv9Jliq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 04</h4>
                        <li onClick={ExNum4}>
                            <div className="title">
                                <h3>اصطلاحات للكتابة 01</h3>
                            </div>
                            <div className="video" id="vid-num-4">
                                <iframe  src="https://www.youtube.com/embed/3H2KVPj3zFg?si=x_4ppm6J3cG_xrVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 05</h4>
                        <li onClick={ExNum5}>
                            <div className="title">
                                <h3>اصطلاحات للكتابة 02</h3>
                            </div>
                            <div className="video" id="vid-num-5">
                                <iframe  src="https://www.youtube.com/embed/XKPi4qwrL6Y?si=a4hnzrGomDtd07mE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 06</h4>
                        <li onClick={ExNum6}>
                            <div className="title">
                                <h3>توزيع الضرب على الجمع والطرح 01</h3>
                            </div>
                            <div className="video" id="vid-num-6">
                                <iframe  src="https://www.youtube.com/embed/cwrpuD2Wp_Q?si=UAYDms3qrOTBJZLG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 07</h4>
                        <li onClick={ExNum7}>
                            <div className="title">
                                <h3>توزيع الضرب على الجمع والطرح 02</h3>
                            </div>
                            <div className="video" id="vid-num-7">
                                <iframe  src="https://www.youtube.com/embed/zYvC5iCAjEE?si=h0xp9Z5Sm2uruj_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 08</h4>
                        <li onClick={ExNum8}>
                            <div className="title">
                                <h3>القسمة الاقليدية</h3>
                            </div>
                            <div className="video" id="vid-num-8">
                                <iframe  src="https://www.youtube.com/embed/c_PPNgPbAeE?si=FUS6emaeeUXFZTpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 09</h4>
                        <li onClick={ExNum9}>
                            <div className="title">
                                <h3>01 القيمة العشرية والقيمة المقربة</h3>
                            </div>
                            <div className="video" id="vid-num-9">
                                <iframe  src="https://www.youtube.com/embed/UME3_75oPUs?si=TcD2YAEaq-rebmXn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 10</h4>
                        <li onClick={ExNum10}>
                            <div className="title">
                                <h3>القيمة العشرية والقيمة المقربة 02</h3>
                            </div>
                            <div className="video" id="vid-num-10">
                                <iframe  src="https://www.youtube.com/embed/SJEsJTtQQhA?si=RBwphsmTwzl4D_07" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 11</h4>
                        <li onClick={ExNum11}>
                            <div className="title">
                                <h3>ضرب كسرين</h3>
                            </div>
                            <div className="video" id="vid-num-11">
                                <iframe  src="https://www.youtube.com/embed/wytbYXGnKYE?si=QemhfGw4Od-JOCzn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 12</h4>
                        <li onClick={ExNum12}>
                            <div className="title">
                                <h3>مقارنة كسرين 01</h3>
                            </div>
                            <div className="video" id="vid-num-12">
                                <iframe  src="https://www.youtube.com/embed/jj5Ieb8t1qM?si=eM2X66BXUqG7f8Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 13</h4>
                        <li onClick={ExNum13}>
                            <div className="title">
                                <h3>مقارنة كسرين 02</h3>
                            </div>
                            <div className="video" id="vid-num-13">
                                <iframe  src="https://www.youtube.com/embed/t66HGeUPDrs?si=-cTGW5I4vcwaGGWO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 14</h4>
                        <li onClick={ExNum14}>
                            <div className="title">
                                <h3>جمع وطرح كسرين 01</h3>
                            </div>
                            <div className="video" id="vid-num-14">
                                <iframe  src="https://www.youtube.com/embed/MEw7S2WCZtk?si=AoZyr8hAUvGbkzX9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 15</h4>
                        <li onClick={ExNum15}>
                            <div className="title">
                                <h3>جمع وطرح كسرين 02</h3>
                            </div>
                            <div className="video" id="vid-num-15">
                                <iframe  src="https://www.youtube.com/embed/opV4Xzw1BWg?si=AfdQDRz7xrS2F-TP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 16</h4>
                        <li onClick={ExNum16}>
                            <div className="title">
                                <h3>ادماج المقطع</h3>
                            </div>
                            <div className="video" id="vid-num-16">
                                <iframe  src="https://www.youtube.com/embed/YBfIM7EntwM?si=EmdpRrzEjgAdbNbm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 17</h4>
                        <li onClick={ExNum17}>
                            <div className="title">
                                <h3>انشاء مستقيمين متعامدين</h3>
                            </div>
                            <div className="video" id="vid-num-17">
                                <iframe  src="https://www.youtube.com/embed/-UBTibCm8SQ?si=uCk8lFGhkMWt4rR2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 18</h4>
                        <li onClick={ExNum18}>
                            <div className="title">
                                <h3>انشاء مستقيمين متوازيين</h3>
                            </div>
                            <div className="video" id="vid-num-18">
                                <iframe  src="https://www.youtube.com/embed/ZB61sHmEjCc?si=i5U2S8YRvBlt6caH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 19</h4>
                        <li onClick={ExNum19}>
                            <div className="title">
                                <h3>محور قطعة مستقيمة</h3>
                            </div>
                            <div className="video" id="vid-num-19">
                                <iframe  src="https://www.youtube.com/embed/ki7Rasjoc0Y?si=hiFGEiRZ0y7tR7mn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                        <h4>الحصة رقم 20</h4>
                        <li onClick={ExNum20}>
                            <div className="title">
                                <h3>منصف زاوية</h3>
                            </div>
                            <div className="video" id="vid-num-20">
                                <iframe  src="https://www.youtube.com/embed/Wrw8VyJD9gE?si=wSSYEBnl5u7_lbqx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SectionOne;