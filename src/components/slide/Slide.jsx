import css from './Slide.module.scss'
import watch from '../../assets/watch.svg'
import loupe from '../../assets/loupe.svg'
import shield from '../../assets/shield.svg'

function Slide(props) {
    const {img, text} = props
    return (
        <div className={css.slide}>
            <img className={css.img} src={img} alt={img} />
            <p className={css.text}>{text}</p>
        </div>
     );
}

export default Slide;