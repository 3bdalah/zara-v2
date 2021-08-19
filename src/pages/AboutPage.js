import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'





const AboutPage = () => {
  return (
   <main >
    <PageHero title="about"/>
    <Wrapper  className="page section section-center">
      <img src={aboutImg} alt='nice desk'/>
      <article>
         <div className="title">
           <h2>Our Story</h2>
           <div className="underline">
           
           </div>
         </div>
         <p>Ad minim sunt non adipisicing esse nostrud voluptate nulla et quis commodo nostrud.Enim consequat sit anim Lorem labore dolor aliqua sit consectetur ex. Nisi velit eu consequat eu aute. Id id est esse ut minim Lorem reprehenderit anim ut adipisicing magna mollit. Aliqua voluptate ad occaecat dolore incididunt ad labore. Consectetur voluptate fugiat nisi enim.

Id aute mollit nostrud veniam velit incididunt eiusmod ex. Eu sunt sunt et ad laboris. Id adipisicing cupidatat Lorem nisi. Consectetur elit deserunt quis aute consectetur commodo pariatur eu eu est enim ad. Incididunt dolore quis reprehenderit velit in. Magna enim laboris officia et nulla.
</p>
      </article>
    </Wrapper>
   </main>

  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
