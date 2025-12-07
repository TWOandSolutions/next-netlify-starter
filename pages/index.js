import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RemoteKevin multiverse!! </title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      
      <main>
        <br /> 
        <Header title="Welcome to TWO & Solutions!!" />

           <p> TWO & Solutions has offered data solutions in a diverse range of computer and internet applications. </p>
    
           <p className="description">
           ➤ <a href="https://youtube.com/@TWOandSolutions/">TWO & Solutions </a> YouTube channel: Science, Data, News & Climate 
           <br />           
            <iframe width="360" height="288" 
            src="https://www.youtube.com/embed/6rcNDSjUiG4" 
            title="Spectacular freshwater ice over..." 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen>
            </iframe>
                  
            <br />
            <br /> 
            <br />

            <br />
    
            @ 2026 by TWO & Solutions inc. All rights are reserved
           </p>
        
      <Footer />
    </main>
    </div>
  )
}
