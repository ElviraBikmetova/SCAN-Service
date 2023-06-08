import css from './Document.module.scss'

function Document(props) {
    const {doc} = props
    return (
        <div className={css.document}>
            <div className={css.header}>
                <p>{doc.date}</p>
                <a className={css.source} href="">{doc.source}</a>
            </div>
            <p className={css.title}>{doc.title}</p>
            <div className={css.tag}>{doc.tag}</div>
            <img className={css.img} src={doc.img} alt={doc.img} />
            <p className={css.text}>{doc.text}</p>
            <div className={css.footer}>
                <a className={css.link} href="">Читать в источнике</a>
                <p>{doc.words}</p>
            </div>
        </div>
     );
}

export default Document;