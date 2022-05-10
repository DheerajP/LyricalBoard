import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>This is title</title>
                <meta name="keywords" content='Lyrical board, Home, place to disuss about lyrics'></meta>
            </Head>
            
            <Nav/>

            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout