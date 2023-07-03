import css from './Benefit.module.scss'

function Slide(props) {
    const {src, alt, text} = props
    return (
        <div className={css.slide}>
            <img className={css.img} src={src} alt={alt} />
            <p className={css.text}>{text}</p>
        </div>
     );
}

export default Slide;