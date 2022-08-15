import lyricStyles from '../styles/Lyric.module.css'
import ReactMarkdown from 'react-markdown'

const SongsList = ({ songs }) => {
    return (
        <div className={lyricStyles.grid}>

            {songs.map((song) => (
                <>

                    <div className="col-md-12">
                        <h2>{song.name}</h2>
                        <ReactMarkdown>{song.fullLyrics}</ReactMarkdown>
                        <p><a className="btn btn-secondary" href={"song/" + song.slug} role="button">View details »</a></p>
                    </div>

                </>
            ))}

        </div>
    )
}
export default SongsList