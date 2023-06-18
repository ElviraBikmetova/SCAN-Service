import { useEffect } from 'react';
import { formatDate } from '../../../../../utils/formatDate';
import css from './ResultCard.module.scss'

function ResultCard(props) {
    const {slide} = props


    return (
        <div className={css.resultCard}>
            <p className={css.period}>{formatDate(slide.date)}</p>
            <p className={css.total}>{slide.totalDocuments}</p>
            <p>{slide.riskFactors}</p>
        </div>
     );
}

export default ResultCard;