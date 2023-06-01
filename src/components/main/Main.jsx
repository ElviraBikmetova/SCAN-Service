import Homepage from '../homepage/Homepage';
import css from './Main.module.scss';

function Main() {
    return (
        <main className={css.main}>
            <div className="container">
                <Homepage />
            </div>
        </main>
     );
}

export default Main;