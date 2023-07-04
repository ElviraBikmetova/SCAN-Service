import { formatDate } from '../../../../../utils/formatDate';
import css from './Document.module.scss'
import DOMPurify from 'dompurify';
import HTMLReactParser from 'html-react-parser';
import documentStub from '../../../../../assets/img/document-stub.jpg'
import getNoun from '../../../../../utils/getNoun';

function Document(props) {
    const {doc} = props
    let category
    const words = doc.attributes.wordCount.toLocaleString('ru-RU')
    const sanitizedText = DOMPurify.sanitize(doc.content.markup, {USE_PROFILES: { html: true }})
    const parsedText = HTMLReactParser(sanitizedText)
    let stringText

    if (Array.isArray(parsedText)) {
        stringText = parsedText.join('')
    } else {
        stringText = parsedText
    }

    const isImg = /<img.*?>/i.test(stringText)
    let src

    if (isImg) {
        src = stringText.match(/<img.*?src="(.*?)".*?>/)[1]
    } else {
        src = ''
    }

    const text = stringText.replace(/<img.*?>/g, "")

    if (doc.attributes.isTechNews) {
        category = 'Tехнические новости'
    } else if (doc.attributes.isAnnouncement) {
        category = 'Анонсы и события'
    } else if (doc.attributes.isDigest) {
        category = 'Сводки новостей'
    } else {
        category = 'Без категории'
    }

    return (
        <div className={css.document}>
            <div className={css.top}>
                <div className={css.header}>
                    <p>{formatDate(doc.issueDate)}</p>
                    <a className={css.source} href={doc.url ? doc.url : 'javascript:void(0)'} target={doc.url && "_blank"} rel={doc.url && "noopener"}>{doc.source.name}</a>
                </div>
                <p className={css.title}>{doc.title.text}</p>
                <div className={css.tag}>{category}</div>
                <img className={css.img} src={src ? src : documentStub} alt='Изображение статьи' />
                <div className={css.text} dangerouslySetInnerHTML={{__html: text}}></div>
            </div>
            <div className={css.footer}>
                <a className={css.link} href={doc.url ? doc.url : 'javascript:void(0)'} target={doc.url && "_blank"} rel={doc.url && "noopener"}>Читать в источнике</a>
                <p>{words} {getNoun(words, 'слово', 'слова', 'слов')}</p>
            </div>
        </div>
     );
}

export default Document;