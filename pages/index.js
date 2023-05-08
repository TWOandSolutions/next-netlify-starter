import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TWO&Solution!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to RemoteKevin multiuniverse!!" />
         
           <p className="description"> 
            ➤ <a href="https://www.youtube.com/c/TWOSolutions/">TWO & Solutions </a> YouTube channel: Science and Nature, News & Climate
            <br />
            <br />
            ➤ <a href="https://www.youtube.com/@THREESolutions">THREE & Solutions </a> YouTube channel: Environment, Travel sites, Community & etc  
            <br />
            <br />
    
            <h3>click to play</h3>
            <section class="youtube-embed">
            <iframe 
            width="100%" height="100%" 
            src="https://youtube.com/shorts/6kMNHabafi0" 
            title="Canada geese and goslings in Silver Lake Waterloo Ontario"
            frameborder="0"
            allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </section>

 
    
    
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
              <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            @ 2023 by TWO & Solutions. All rights are reserved
           </p>
        
      </main>

      <Footer />
    </div>
  )
}
