import Head from 'next/head'
import SongsList from '../components/SongsList'

export default function Songs({ songs }) {
  console.log(songs)
  return (
    <>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Songs</h1>
            {/* <p>A platform to share and discuss the lyrics you love and interested in!</p> */}
            {/* <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <SongsList songs={songs} />
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
  songCollection {
    items {
      sys {
        id
      }
      slug
      fullLyrics
      name
      movie
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
      songs: responseData.data.songCollection.items,
    },
  }
}

