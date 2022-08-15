import lyricStyles from '../styles/Lyric.module.css'
import ReactMarkdown from 'react-markdown'

const LyricList = ({ lyrics }) => {
    return (
        <div className={lyricStyles.grid}>

            {lyrics.map((lyric) => (
                <>

                    <div className="col-md-12">
                        <h2>{lyric.internalName}</h2>
                        <ReactMarkdown>{lyric.lyric}</ReactMarkdown>
                        <p><a className="btn btn-secondary" href={"lyric/" + lyric.slug} role="button">View details »</a></p>
                    </div>

                </>
            ))}

        </div>
    )
}
export default LyricList