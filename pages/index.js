import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TWO & Solutions inc </title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      
      <main>
        <br /> 
        <Header title="Welcome to TWO & Solutions!!" />

           <p> TWO & Solutions has offered data solutions in a diverse range of computer and internet applications. </p>
    
           <p className="description">
           ➤ The website is under construction now. 
           
           </p>
        
      <Footer />
    </main>

              @ 2026 by TWO & Solutions inc. All rights are reserved
    </div>
  )
}
