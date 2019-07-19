import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import typography from '../pages/globalStyles/typography.module.css'

import Header from '../components/UniversalElements/Header/Header'
import Footer from '../components/UniversalElements/Footer/Footer'
import OtherServices from '../components/UniversalElements/OtherServices/OtherServices'
import BeginNow from '../components/UniversalElements/BeginNow/BeginNow'
import './index.css'
import Header2 from '../components/UniversalElements/Header/Header2'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header2 />
    <div style={{paddingTop: '60px', overflow: 'hidden'}}>
      {children()}
    </div>
    <BeginNow />
    <OtherServices />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
