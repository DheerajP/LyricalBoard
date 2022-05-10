import lyricStyles from '../styles/Lyric.module.css'

export default function LyricList({ lyrics }) {
    return (
        <div className={lyricStyles.grid}>

            {lyrics.map((lyric) => (
                <>
                    <h3>{lyric.internalName}</h3>
                    <p>{lyric.lyric}</p>
                    <a href={lyric.slug}>More</a>
                </>
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