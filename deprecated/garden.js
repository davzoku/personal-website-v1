import React from "react"
import Layout from "components/Layout"
import { Link } from "gatsby"
//import { lighten, darken } from 'polished'
import { css } from "@emotion/core"
//import { useTheme } from 'components/Theming'
//import { fonts } from '../lib/typography'
import Container from "components/Container"
import { graphql } from "gatsby"
import { getTopicsFromNotes } from "components/TopicFilters"
import SimpleCard from "components/SimpleCard"
//import { bpMaxSM } from '../lib/breakpoints'
import get from "lodash/get"
import includes from "lodash/includes"
import isEmpty from "lodash/isEmpty"
import some from "lodash/some"

const GardenPage = ({ data: { site, notesQuery } }) => {
  // Set theme
  //const theme = useTheme()

  // Set up topic and growthStage filters
  const filters = getTopicsFromNotes(notesQuery.edges)
  const [activeFilters, setActiveFilters] = React.useState([])

  // Handle filter
  const handleFilterClick = (filter, options) => {
    const clearFilters = get(options, "clearFilters", [])
    let newActiveFilters

    if (includes(activeFilters, filter)) {
      newActiveFilters = activeFilters.filter((f) => f !== filter)
    } else {
      newActiveFilters = activeFilters.concat(filter)
    }

    if (!isEmpty(clearFilters)) {
      clearFilters.forEach((f) => {
        newActiveFilters = newActiveFilters.filter(
          (activeFilter) => f !== activeFilter
        )
      })
    }

    setActiveFilters(newActiveFilters)
  }

  const displayedNotes = notesQuery.edges.filter(({ node: note }) => {
    const matchesBoth = activeFilters.reduce(
      (acc, current) => {
        return {
          growth: acc.growth || includes(filters.growthFilters, current),
          topics: acc.topics || includes(filters.topicFilters, current),
        }
      },
      { growth: false, topics: false }
    )

    const matchesGrowth = includes(
      activeFilters,
      note.childMdx.frontmatter.growthStage
    )
    const matchesTopic = some(note.childMdx.frontmatter.topics, (t) =>
      includes(activeFilters, t)
    )

    if (matchesBoth.growth && matchesBoth.topics) {
      return matchesGrowth && matchesTopic
    }

    return isEmpty(activeFilters) || matchesTopic || matchesGrowth
  })

  // Beginning of return statement
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          .header {
            margin-bottom: 2em;
            max-width: 660px;
            h1 {
              margin-bottom: 0.4em;
            }
            p {
              line-height: 1.5em;
            }
          }
          .filterSection {
            display: grid;
            grid-template-columns: 70% 27%;
            font-size: 0.85em;
          }
          .growthFilter {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-end;
            align-content: flex-start;
          }
          .topicFilter {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
          }
          .notesGrid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 2em;
          }
        `}
      >
        <section className="header">
          <h1>The Digital Garden</h1>
          <p>
            An open collection of notes, resources, sketches, and explorations
            I'm currently cultivating. Some notes are Seedlings, some are
            budding, and some are fully grown Evergreen.
          </p>
        </section>

        {/*------------  Filtering Feature ------------ */}

        <div className="filterSection">
          {/* <svg width="200px" height="30px" css={css`margin: 0 auto;`}><rect fill={theme.colors.lightOrange} width="200px" height="1px" /></svg> */}
          <div className="topicFilter">
            {filters.topicFilters.map((filter) => {
              return (
                <div
                  onClick={() => handleFilterClick(filter)}
                  css={css({
                    fontSize: "92%",
                    padding: "0.1em 0.4em",
                    margin: "2px",
                    borderRadius: "4px",
                    transition: "all 400ms ease-in-out",
                    ":hover": {
                      cursor: "pointer",
                    },
                  })}
                >
                  {filter}
                </div>
              )
            })}
          </div>
          <div className="growthFilter">
            {filters.growthFilters.map((filter) => {
              return (
                <div
                  onClick={() =>
                    handleFilterClick(filter, {
                      clearFilters: filters.growthFilters.filter(
                        (f) => f !== filter
                      ),
                    })
                  }
                >
                  {filter}
                </div>
              )
            })}
          </div>
        </div>

        {/* ------------ Notes Section ------------------ */}

        <section className="notes">
          <div className="notesGrid">
            {displayedNotes.map(({ node: note }) => (
              <Link
                to={`/${note.childMdx.frontmatter.slug}`}
                aria-label={`View ${note.title}`}
              >
                <SimpleCard
                  margintop="0em"
                  marginbottom="0em"
                  key={note.id}
                  hover
                  css={css`
                    width: 270px;
                    margin-right: 0.8em;
                    margin-bottom: 0.8em;
                    padding: 0.8em 1em;
                    transition: all 400ms ease-in-out;
                    div.metadata {
                      display: flex;
                      flex-direction: row;
                      justify-content: space-between;
                      padding-top: 0.4em;
                      margin-top: 1.24em;
                      h6 {
                        margin: 0;
                      }
                    }
                    h6.growthStage {
                      text-align: right;
                      opacity: 90%;
                      font-size: 0.6em;
                      text-transform: capitalize;
                      letter-spacing: 0.3px;
                      span {
                        padding-left: 0.5em;
                        font-size: 1em;
                      }
                    }
                    h6.updated {
                      font-size: 0.6em;
                      opacity: 80%;
                    }
                  `}
                >
                  <h4>{note.title}</h4>
                  <div className="metadata">
                    <h6 className="updated">
                      {note.childMdx.frontmatter.updated}
                    </h6>
                    <span>
                      {note.childMdx.frontmatter.growthStage === "Seedling" ? (
                        <h6 className="growthStage">
                          {" "}
                          seedling
                          <span role="img" aria-label="seedling">
                            🌱{" "}
                          </span>
                        </h6>
                      ) : null}
                      {note.childMdx.frontmatter.growthStage === "Budding" ? (
                        <h6 className="growthStage">
                          {" "}
                          budding
                          <span role="img" aria-label="seedling">
                            🌿
                          </span>{" "}
                        </h6>
                      ) : null}
                      {note.childMdx.frontmatter.growthStage === "Evergreen" ? (
                        <h6 className="growthStage">
                          {" "}
                          evergreen
                          <span role="img" aria-label="seedling">
                            🌳
                          </span>{" "}
                        </h6>
                      ) : null}
                    </span>
                  </div>
                </SimpleCard>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default GardenPage

export const GardenPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    notesQuery: allMdx {
      edges {
        node {
          id
          title
          childMdx {
            frontmatter {
              growthStage
              topics
              slug
              updated(formatString: "MMM DD, YYYY")
            }
          }
        }
      }
    }
  }
`
