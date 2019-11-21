import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StorePage = ({ data }) => (
  <Layout>
    <SEO title="Store" />
    <Grid container spacing={3}>
      {data.tshirts.edges.map(({ node }) => (
        <Grid item xs>
          <Card>
            <CardMedia alt={node.title} height="140" title={node.title}>
              <Img fixed={node.image.childImageSharp.fixed} alt={node.title} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Adventure time with Wolfy
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary">
                Buy
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Layout>
)

export const query = graphql`
  query {
    tshirts: allTshirtsYaml {
      edges {
        node {
          featured
          categories
          image {
            childImageSharp {
              fixed(width: 180, height: 320) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          sizes
          title
        }
      }
    }
  }
`

export default StorePage
