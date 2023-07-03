import css from './Benefits.module.scss'
import benefits from '../../../../assets/img/benefits.svg'
import benefitsMobile from '../../../../assets/img/benefits-mobile.svg'
import {BenefitsSlider, BenefitsSliderForMobile} from '../../../sliders/BenefitsSlider';
import clsx from 'clsx';

function Benefits() {
    return (
        <section className={css.benefits}>
            <h2 className={css.title}>Почему <br/> именно мы</h2>
            <div className={ clsx(css.slider,'benefits-slider')}>
                <div className={css.benefitsSlider}><BenefitsSlider /></div>
                <div className={css.benefitsSliderForMobile}><BenefitsSliderForMobile /></div>
            </div>
            <div className={css.img}><img src={benefits} alt="benefits" /></div>
            <div className={css.imgMobile}><img src={benefitsMobile} alt="benefits" /></div>
        </section>
     );
}

export default Benefits;