import './btn.scss';

let Buttons= ({label, style, ...others})=>{
  
    return(
        <button className={`${style} btn`} {...others}>{label}</button>
    )
}

export default Buttons;