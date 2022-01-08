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
            <a href="https://www.youtube.com/c/TWOSolutions/">➤ TWO & Solutions YouTube channel: Science and Nature</a>
             
            <br />    
            ➤ THREE & Solutions YouTube: Starcraft and Gaming | Créateur de Cantent du Canada 
   
           </p>
        
      </main>

      <Footer />
    </div>
  )
}
