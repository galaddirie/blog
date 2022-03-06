import React, { useEffect } from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'
import $ from 'jquery'
import { Author, PostCard } from '../../components/Posts/Post';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown'
const ARTICLE = gql`
query getArticle($slug: String!){
  articles(filters:{slug:{eq:$slug}}){
        data{
            id
            attributes{
                createdAt
                title
                body
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

function TableOfContent() {

    useEffect(() => {
        /* SNIPPET https://codepen.io/GeoffreyCrofte/pen/xOPdLZ
        
         */
        var positions = [],
            build_toc = function () {
                var output = "<p>Table of content</p><ul class='sticky'>",
                    svg = '<svg viewBox="0 0 36 36" height="36px" width="36px" y="0px" x="0px"><circle transform="rotate(-90 18 18)" stroke-dashoffset="100" stroke-dasharray="100 100" r="16" cy="18" cx="18" stroke-width="2" fill="none"/></svg>';

                $('.post-content').find('h2').each(function (i) {
                    $(this).attr('id', 'title_' + i)

                    output += '<li><a href="#title_' + i + '" className="toc-title_' + i + '">' + svg + $(this).text() + '</a></li>';
                });

                return output;
            },
            get_bottom_off_content = function () {
                var $content = $('.post-content'),
                    offset = $content.offset();

                return $content.outerHeight() + offset.top;
            },
            get_positions = function () {
                $('.post-content').find('h2').each(function (i) {
                    var offset = $(this).offset();
                    positions['title_' + i] = offset.top - 20;
                });
                return positions;
            },
            set_toc_reading = function () {
                var st = $(document).scrollTop(),
                    count = 0;

                for (var k in positions) {
                    var n = parseInt(k.replace('title_', ''));
                    var has_next = typeof positions['title_' + (n + 1)] !== 'undefined',
                        not_next = has_next && st < positions['title_' + (n + 1)] ? true : false,
                        diff = 0,
                        $link = $('.toc-' + k);

                    if (has_next) {
                        diff = (st - positions[k]) / (positions['title_' + (n + 1)] - positions[k]) * 100;
                    } else {
                        diff = (st - positions[k]) / (get_bottom_off_content() - positions[k]) * 100;
                    }

                    $link.find('circle').attr('stroke-dashoffset', Math.round(100 - diff));

                    if (st >= positions[k] && not_next && has_next) {
                        $('.toc-' + k).addClass('toc-reading');
                    } else if (st >= positions[k] && !not_next && has_next) {
                        $('.toc-' + k).removeClass('toc-reading');
                    } else if (st >= positions[k] && !not_next && !has_next) {
                        $('.toc-' + k).addClass('toc-reading');
                    }

                    if (st >= positions[k]) {
                        $('.toc-' + k).addClass('toc-already-read');
                    } else {
                        $('.toc-' + k).removeClass('toc-already-read');
                    }

                    if (st < positions[k]) {
                        $('.toc-' + k).removeClass('toc-already-read toc-reading');
                    }

                    count++;
                }
            };

        // build our table of content
        $('.table-of-contents').html(build_toc());

        // first definition of positions
        get_positions();



        var stickEl = $('.sticky'),
            stickyElTop = stickEl.offset().top;

        var sticky = function () {
            var scrollTop = $(window).scrollTop();

            if (stickyElTop < scrollTop + 20) {
                stickEl.addClass('is-fixed');
            } else {
                stickEl.removeClass('is-fixed');
            }
        };
        var addListeners = () => {

            $(window).on('scroll', function () {
                sticky();
            });
        }

        addListeners();

        return () => {

        };
    }, []);
    return (
        <div className='table-of-contents-container py-4'>
            <aside className="table-of-contents px-3 sidebar">


            </aside>

        </div>


    )

}

export default function BlogArticle() {
    const { slug } = useParams()

    const { loading, error, data } = useQuery(ARTICLE, {
        variables: {
            'slug': slug
        }
    })
    if (loading) return (<Container><p>Loading...</p></Container>)
    if (error) return (<p>error</p>)
    console.log(data.articles.data[0].attributes)
    const post = data.articles.data[0].attributes

    return (
        <Container className='py-5'>

            <section className="">
                <Row>
                    <Col xl={3}>
                        <TableOfContent />
                    </Col>
                    <Col xl={9}>

                        <article className='post-content'>

                            <header className="mb-4">

                                <h1 className="fw-bolder mb-1">{post.title}</h1>

                                <Author date={post.createdAt} className="mt-lg-5 mb-4" />

                            </header>
                            <div className='tag-container'>
                                {post.tags.data.map((tag) => {
                                    return <Card.Tag key={tag.attributes.value} data={tag} />
                                })}
                            </div>
                            <figure className="mb-4"><img className="img-fluid rounded" src={`http://localhost:1337${post.cover.data.attributes.url}`} alt="..." width={'100%'} /></figure>

                            <section className="mb-5">
                                <ReactMarkdown children={`${post.body}`} />
                            </section>
                        </article>


                    </Col>
                </Row>
            </section>

            <section className='article-footer'>
                <Row>
                    <Col xl={3}></Col>
                    <Col xl={9} className='comment-section bg-light'></Col>
                </Row>
            </section>


        </Container>

    )
}
