import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to TWO & Solutions!" />
         
           <p className="description"> 
            ➤ TWO & Solutions YouTube channel: Science & Nature 
            ➤ THREE & Solutions YouTube: Starcraft & Gaming | Créateur de Cantent du Canada 
    // <code>pages/index.js</code>  
           </p>
        
      </main>

      <Footer />
    </div>
  )
}
