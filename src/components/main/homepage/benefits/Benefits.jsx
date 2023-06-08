import css from './Benefits.module.scss'
import benefits from '../../../../assets/img/benefits.svg'
import BenefitsSlider from '../../../sliders/BenefitsSlider';

function Benefits() {
    return (
        <section className={css.benefits}>
            <h2 className={css.title}>Почему именно мы</h2>
            <div className={css.slider}>
                <BenefitsSlider />
            </div>
            <img src={benefits} alt="benefits" />
        </section>
     );
}

export default Benefits;