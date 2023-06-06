import css from './Benefit.module.scss'
import watch from '../../assets/img/watch.svg'
import loupe from '../../assets/img/loupe.svg'
import shield from '../../assets/img/shield.svg'

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