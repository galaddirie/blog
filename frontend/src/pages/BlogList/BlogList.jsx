import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { FeaturePostLarge, PostCard } from '../../components/Posts/Post'
import { useQuery, gql } from "@apollo/client"
import './blog.css'

const ARTICLES = gql`
query GetArticles{
    articles(sort:"createdAt:desc"){
  
      data{
        id
        
        attributes{
          createdAt
          title
          slug
          blurb
          feature
          author{
            data{
              attributes{
                name
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
          }
          tags{
            data{
              attributes{
                name
                value
              }
            }
          }
          cover{
            data{
              attributes{
                url
              }
            }
          }
        }
      } 
    }
  }
   
`

const AOTD = gql`
query GetPrimaryArticle{
    primaryArticles{
      data{
        attributes{
          article{
            data{
              attributes{
                title
                slug
                blurb
                tags{
                    data{
                        attributes{
                            name
                            value
                        }
                    }
                }
                cover{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
function PrimaryArticle() {
    const { loading, error, data } = useQuery(AOTD)
    if (loading) return (<Container><p>Loading...</p></Container>)
    if (error) return (<p>error</p>)

    return (<>
        {data.primaryArticles.data.map((post) => {
            console.log(data.primaryArticles.data)
            return <FeaturePostLarge key={`AOTD`} data={post.attributes} />
        })}
    </>)

}

export default function BlogList() {
    const { loading, error, data } = useQuery(ARTICLES)
    if (loading) return (<Container><p>Loading...</p></Container>)
    if (error) return (<p>error</p>)

    return (
        <main>
            <Container className='px-5'>
                <h1 className="fw-bolder fs-1 mb-4">Blender NPR Blog</h1>
                <PrimaryArticle />
                <h3 className="font-weight-bold mb-0 mt-5">Recent Posts</h3>
                <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className='' >
                    {data.articles.data.map((post) => {
                        return < PostCard key={post.id} data={post.attributes} />
                    })}

                </div>

            </Container>
        </main>
    )
}
