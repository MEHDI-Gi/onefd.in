function FixBox(){
    const themeClick = () => {
            document.body.classList.toggle('lightTheme');
        if(document.body.classList.contains('lightTheme')){
            document.getElementById("dayNight").className = "fa-solid fa-moon"
        }else{
            document.getElementById("dayNight").className = "fa-solid fa-sun"
        }
            
    };
    const upClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };
    return(
        <div className="boxes">
            <div className="box" onClick={upClick} title="up">
                <i id="arrowUp" class="fa-solid fa-arrow-up"></i>
            </div>
            <div className="box" onClick={themeClick} title="theme">
                <i id="dayNight" class="fa-solid fa-sun"></i>
            </div>
        </div>
    )
};

export default FixBox;