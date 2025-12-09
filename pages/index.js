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

           <p> We offer data science solutions and consulting services with over 20 years of experience   </p>
           <p> from industry and academic experience, projects, and knowledge in diverse institutions and companies. </p>
           <br />
           <br /> 
           <p className="description">
            <p> ➤ TWO & Solutions provides appropriate guidance for beginner, intermediate users, and clients to be ready for working independently   </p>
              <p> at the next level of work from real-world problems in the future - guiding solutions in your areas and disciplines. </p>
           <br /> 
            <p> ➤ Currently, we offer services in the following subjects: </p>
            <li style="text-align: justify;"><span style="font-size: 16px; font-family: arial, helvetica, sans-serif;">Open Data</span></li>
            <p> - Open Data </p>
            <p> - Open Software </p>
            <p> - Critical thinking and logical reasoning </p>
            <p> - Lesson plan and course development </p> 
           </p>
        
      <Footer />
    </main>

              @ 2026 by TWO & Solutions inc. All rights are reserved
    </div>
  )
}
