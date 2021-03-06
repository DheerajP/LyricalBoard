import lyricStyles from '../styles/Lyric.module.css'

export default function LyricList({ lyrics }) {
    return (
        <div className={lyricStyles.grid}>

            {lyrics.map((lyric) => (
                <div className={lyricStyles.card}>
                    <a href={lyric.slug}>
                        <h3>{lyric.internalName}</h3>
                        <p>{lyric.lyric}</p>
                        <br />
                        Discuss?</a>
                </div>
            ))}

        </div>
    )
}

// const LyricList = ({ lyrics }) => {
//     return (
//         <div className={lyricStyles.grid}>

//             {lyrics.map((lyric) => (
//                 <>
//                     <h3>{lyric.internalName}</h3>
//                     <p>{lyric.lyric}</p>
//                     <a href={lyric.slug}>More</a>
//                 </>
//             ))}

//         </div>
//     )
// }

// export default LyricList