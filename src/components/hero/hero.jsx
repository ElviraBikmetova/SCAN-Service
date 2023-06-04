import css from './hero.module.scss'
import hero from '../../assets/hero.svg'
import { useSelector } from 'react-redux'

function Hero() {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <section className={css.hero}>
            <div className={css.content}>
                <h1 className={css.title}>сервис по поиску публикаций <br/> о компании <br/> по его ИНН</h1>
                <p className={css.subtitle}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                {isAuth && <button className={css.btn}>Запросить данные</button>}
            </div>
            <img src={hero} alt="hero" />
        </section>
     );
}

export default Hero;