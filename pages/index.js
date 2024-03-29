import Head from 'next/head'
import LyricList from '../components/LyricList'

export default function Home({ lyrics }) {
  return (
    <>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Welcome to Lyrical board</h1>
            <p>A platform to share and discuss the lyrics you love and interested in!</p>
            {/* <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <LyricList lyrics={lyrics} />
          </div>
        </div>

      </main>
    </>
  )
}

export async function getStaticProps() {
  // first, grab our Contentful keys from the .env file
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  var data = JSON.stringify({
    query: `{
  lyricsCollection {
    items {
      sys {
        id
      }
      internalName
      slug
      lyric
      yourPerspective
      lyricWriter
      {
        name,
        slug
      }
      
      yourPerspective
      song{
        name
        slug
      }
      commentsCollection{
        items{
          name,
          comment
        }
      }
    }
  }
}`,
    variables: {}
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
  console.log(responseData)
  console.log(responseData.data)
  return {
    props: {
      lyrics: responseData.data.lyricsCollection.items,
    },
  }
}

