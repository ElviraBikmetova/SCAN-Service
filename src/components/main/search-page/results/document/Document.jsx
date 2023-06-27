import { formatDate } from '../../../../../utils/formatDate';
import css from './Document.module.scss'
import DOMPurify from 'dompurify';
import HTMLReactParser from 'html-react-parser';

function Document(props) {
    const {doc} = props
    let category
    const words = doc.attributes.wordCount.toLocaleString('ru-RU')
    const sanitizedText = DOMPurify.sanitize(doc.content.markup, {USE_PROFILES: { html: true }})
    // console.log(sanitizedText)
    const parsedText = HTMLReactParser(sanitizedText)
    console.log(parsedText)
    const isImg = /<img.*?>/i.test(parsedText)
    let src
    if (isImg) {
        src = parsedText.match(/<img.*?src="(.*?)".*?>/)[1]
    } else {
        src = ''
    }
    // console.log(img)
    const text = parsedText.replace(/<img.*?>/g, "")
    // console.log(text)

    if (doc.attributes.isTechNews) {
        category = 'Tехнические новости'
    } else if (doc.attributes.isAnnouncement) {
        category = 'Анонсы и события'
    } else if (doc.attributes.isDigest) {
        category = 'Сводки новостей'
    } else {
        category = 'Без категории'
    }

    function getVariantWord(number) {
        let word = 'слов';
        if (number % 10 === 1 && number % 100 !== 11) {
          word += 'о';
        } else if ((number % 10 >= 2 && number % 10 <= 4) && (number % 100 < 10 || number % 100 >= 20)) {
          word += 'а';
        } else {
          word += '';
        }
        return word;
      }

    return (
        <div className={css.document}>
            <div className={css.top}>
                <div className={css.header}>
                    <p>{formatDate(doc.issueDate)}</p>
                    <a className={css.source} href={doc.url} target="_blank" rel="noopener">{doc.source.name}</a>
                </div>
                <p className={css.title}>{doc.title.text}</p>
                <div className={css.tag}>{category}</div>
                <img className={css.img} src={src} alt='Изображение статьи' />
                {/* <p className={css.text}>{text}</p> */}
                <div className={css.text} dangerouslySetInnerHTML={{__html: text}}></div>
            </div>
            <div className={css.footer}>
                <a className={css.link} href={doc.url} target="_blank" rel="noopener">Читать в источнике</a>
                <p>{words} {getVariantWord(words)}</p>
            </div>
        </div>
     );
}

export default Document;