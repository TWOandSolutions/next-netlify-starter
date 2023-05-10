import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to RemoteKevin multiuniverse!! </title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      
      <main>
        <Header title="Welcome to RemoteKevin multiuniverse!!" />
    
           <p>Here is a quote from WWF's website:</p>
           <blockquote cite="http://www.worldwildlife.org/who/index.html">
           For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
           </blockquote> 
           
           <p className="description">
           ➤ <a href="https://www.youtube.com/c/TWOSolutions/">TWO & Solutions </a> YouTube channel: Science and Nature, News & Climate
           <br />           
            <iframe width="180" height="288" 
            src="https://www.youtube.com/embed/6rcNDSjUiG4" 
            title="Spectacular freshwater ice over subarctic region from Korean Airlines #shorts" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen>
            </iframe>
    
            <iframe width="180" height="288" 
            src="https://www.youtube.com/embed/1z0Y1c0kdqw" 
            title="How many Microwave transmission satellite dishes did you find ? #shorts" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen></iframe>
    
            <br />
            ➤ <a href="https://www.youtube.com/@THREESolutions">THREE & Solutions </a> YouTube channel: Environment, Travel sites, Community & etc  
            <br />    
            <iframe width="180" height="288" 
            src="https://www.youtube.com/embed/6kMNHabafi0" 
            title="Canada geese and goslings in Silver Lake Waterloo Ontario #shorts" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen>
            </iframe>
    
            <iframe width="180" height="288" 
            src="https://www.youtube.com/embed/KprVmEOpp_4" 
            title="Cool skyline and landscape | New Silver Lakeline and Waterloo Park improvement #shorts" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; 
            web-share" allowfullscreen>
            </iframe>
            <br />    
            @ 2023 by TWO & Solutions. All rights are reserved
           </p>
        
      <Footer />
    </main>
    </div>
  )
}
