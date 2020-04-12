/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const identity = useIdentityContext()
  const [dialog, setDialog] = useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"

  console.log('identity', identity)
  const isLoggedIn = identity && identity.isLoggedIn

  // useEffect(() => {
  //   if (identity) {
  //     window.netlifyIdentity.on("init", user => {
  //       if (!user) {
  //         window.netlifyIdentity.on("login", () => {
  //           document.location.href = "/admin/";
  //         });
  //       }
  //     });
  //   }
  //   console.log('Window identity', window.netlifyIdentity);
  // }, []);

  console.log('identity', identity);
  console.log('name', name);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
