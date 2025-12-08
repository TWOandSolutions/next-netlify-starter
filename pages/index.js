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

           <p> Two & Solutions offers data science solutions and consulting services with over 30-year experience from industry and academic experience, project, and knowledge in diverse institutions and companies. </p>

           <p> We provide appropriate guidance for beginner, intermediate users and clients to be ready for working independently at the next level of work from real world problems in the future - guiding solutions at your areas and disciplinary. </p>    
    
           <p className="description">
           ➤ The website is under construction now. 
           
           </p>
        
      <Footer />
    </main>

              @ 2026 by TWO & Solutions inc. All rights are reserved
    </div>
  )
}
