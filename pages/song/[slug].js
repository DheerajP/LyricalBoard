import Head from 'next/head'
import { getEntriesByContentType } from "../../lib/helpers";
import _ from "lodash";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import richtextRenderOptions from "../../lib/richtextRenderOptions";
import ReactMarkdown from 'react-markdown'
import ImageComponent from "../../components/ImageComponent";



const songPage = (props) => {
  // console.log("Hello", lyrics);
  // const lyric = _.get(lyrics, "lyric.items[0]");
  // const contentType = _.get(lyric, "sys.contentType.sys.id");
  // const lyricId = _.get(lyric, "sys.id");
  // const fields = _.get(lyric, "fields");
  // const title = _.get(lyric, "fields.internalName");
  console.log(props);
  //console.log(props.lyrics.internalName);

  return (
    <>

      <Head>
        <title>{props.song.name}</title>
      </Head>

      <div className="">

        <h1 className="text-3xl mb-4 font-bold">{props.song.name}</h1>
        <p><strong>Movie: </strong>{props.song.movie}</p>
        <div style={{ whiteSpace: "pre-wrap" }}>
          <ReactMarkdown>{props.song.fullLyrics}</ReactMarkdown>
        </div>



      </div>


    </>
  );
};


export async function getStaticProps(context) {

  console.log(context);
  const slug = _.get(context, "params.slug");
  // first, grab our Contentful keys from the .env file
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  var data = JSON.stringify({
    query: `query GetWriterBySlug($slug: String!) {
      songCollection(limit: 1, where: { slug: $slug }) {
        total
        items {
            slug
            name
            movie
            fullLyrics
        }
      }
    }
    `,
    variables: { slug: slug }
  });

  // then, send a request to Contentful (using the same URL from GraphiQL)
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST', // GraphQL *always* uses POST requests!
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`, // add our access token header
      },
      // send the query we wrote in GraphiQL as a string
      body: data
    }
  );
  // grab the data from our response
  const responseData = await res.json()
  // console.log(responseData)
  //console.log(responseData.data)
  //console.log(responseData.data.lyricsCollection.items)
  // console.log(responseData.data.lyricsCollection.items[0])
  return {
    props: {
      song: responseData.data.songCollection.items[0],
    },
  }
}

// export async function getStaticProps(context) {
//   const slug = _.get(context, "params.slug");
//   const lyric = await getEntriesByContentType("lyrics", slug);

//   return {
//     props: { lyric },
//   };
// }

export async function getStaticPaths() {
  const lyricEntries = await getEntriesByContentType("song");

  let paths = [];
  if (lyricEntries) {
    try {
      paths = lyricEntries.items.map((entry) => {
        const slugVal = _.get(entry, "fields.slug");
        return { params: { slug: slugVal } };
      });
    } catch (error) { }
  }

  return {
    paths: paths,
    fallback: false,
  };
}


export default songPage;


