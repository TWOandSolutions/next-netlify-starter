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
        <Header title="Welcome to RemoteKevin multiuniverse!!" />
    
           <p> Check one of YouTube shorts with a niche. Currently the accumulated views are over 125K. Enjoy watching it!</p>
           
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
            src="https://www.youtube.com/embed/R-3K46DkkUo" 
            title="The life of ION Light Rail Transit or LRT Waterloo #shorts" 
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
