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
            ➤ <a href="https://www.youtube.com/c/TWOSolutions/">TWO & Solutions </a> YouTube channel: Science and Nature 
            <br />
            print("\n")
            ➤ <a href="https://www.youtube.com/channel/UCZlXq7NgCqDCdgA_ro_8liA/">THREE & Solutions </a> YouTube channel: Starcraft and Gaming 
            <br />
            print("\n")  
            | Créateur de Cantent du Canada
      
   
           </p>
        
      </main>

      <Footer />
    </div>
  )
}
