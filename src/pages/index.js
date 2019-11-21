import React from "react"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={3}>
      Page of RMB
    </Grid>
  </Layout>
)

export default IndexPage
