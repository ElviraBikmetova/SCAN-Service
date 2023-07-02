import css from './Benefit.module.scss'

function Slide(props) {
    const {src, text} = props
    return (
        <div className={css.slide}>
            <img className={css.img} src={src} alt={''} />
            <p className={css.text}>{text}</p>
        </div>
     );
}

export default Slide;