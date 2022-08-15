import lyricStyles from '../styles/Lyric.module.css'
import ReactMarkdown from 'react-markdown'

const WritersList = ({ writers }) => {
    return (
        <div className={lyricStyles.grid}>

            {writers.map((writer) => (
                <>

                    <div className="col-md-12">
                        <h2>{writer.name}</h2>
                        <ReactMarkdown>{writer.about}</ReactMarkdown>
                        <p><a className="btn btn-secondary" href={"writer/" + writer.slug} role="button">View details »</a></p>
                    </div>

                </>
            ))}

        </div>
    )
}
export default WritersList