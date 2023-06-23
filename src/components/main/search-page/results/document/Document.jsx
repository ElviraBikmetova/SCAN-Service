import css from './Document.module.scss'

function Document(props) {
    const {doc} = props
    return (
        <div className={css.document}>
            <div className={css.header}>
                <p>{doc.issueDate}</p>
                <a className={css.source} href={doc.url} target="_blank" >{doc.source.name}</a>
            </div>
            <p className={css.title}>{doc.title.text}</p>
            <div className={css.tag}>технические новости</div>
            <img className={css.img} src={doc.img} alt={doc.img} />
            <p className={css.text}>текст статьи</p>
            <div className={css.footer}>
                <a className={css.link} href="">Читать в источнике</a>
                <p>кол-во слов</p>
            </div>
        </div>
     );
}

export default Document;