import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello hackathon!</h1>
    <p>My name is Lukasz from Poland, living in Germany. I code for 3 months now... </p>
    <p>I am so exited, to be part of the freecodecamp community.</p>
    <p>Keep on hacking...</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
