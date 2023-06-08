import css from './ResultCard.module.scss'

function ResultCard(props) {
    const {slide} = props
    return (
        // <div className={css.block}>
            <div className={css.resultCard}>
                <p className={css.period}>{slide.period}</p>
                <p className={css.total}>{slide.total}</p>
                <p>{slide.risks}</p>
            </div>
        // </div>
     );
}

export default ResultCard;