import "./Post.css"
import React, { Component } from 'react'

import { Container, Row, Col, Card, CardImg, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


Card.Tag = ({ children }) => {
    return (
        <div className="badge bg-gradient rounded-pill mb-2 me-2" style={{ 'background-color': '#FF2867', }}>{children}</div>
    )
}

function Author() {
    return (
        <div className="d-flex align-items-center">
            <Link to={`/user`}><img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="user icon" width={40} height={40} /></Link>
            <div className="small">
                <Link to={`/user`}><div className="fw-bold">Galad</div></Link>
                <div className="text-muted">March 12, 2021 &middot; 6 min read</div>
            </div>
        </div>
    )
}

function FeaturedPostCard() {
    return (
        <Col lg={4} className="mb-5 d-block">
            <Card className="h-100 shadow border-0 post-card" >
                <Link to={`/post`}>
                    <CardImg className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="post cover picture" width={'100%'} height={'100%'} />
                </Link>
                <Card.Body className="p-4">
                    <div className='tag-container'>
                        <Card.Tag>News</Card.Tag>
                    </div>
                    <div>
                        {/* <a className="text-decoration-none link-dark stretched-link" href="#!"></a> */}
                        <Link className="link-primary" to={`/blog`}><h5 className="card-title mb-3 ">Blog post title</h5></Link>
                    </div>

                    <p className="card-text mb-0">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        <Link to={`/post`} className="stretched-link text-decoration-none ms-3">
                            Read more
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </p>

                </Card.Body>

                <Card.Footer className="p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <Author />

                    </div>
                </Card.Footer>
            </Card>
        </Col>
    )
}
function FeaturePostLarge() {
    return (
        <Card className="border-0 shadow rounded-3 overflow-hidden">
            <Card.Body className="p-0">
                <Row className="gx-0">
                    <Col lg={6} xl={5} className="py-lg-5">
                        <div className="p-4 p-md-5">
                            <Card.Tag>News</Card.Tag>
                            <div className="h2 fw-bolder">Article heading goes here</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                            <Link className="stretched-link text-decoration-none" to={'/post'}>
                                Read more
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} xl={7}>
                        <div className="bg-featured-blog" style={{ backgroundImage: 'url(./img/test.jpg)' }}></div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

    )
}
function PostCard() {
    return (
        <>
            <Card className="border-1 shadow" style={{ overflow: 'hidden' }}>


                <Row className="post-preview">

                    <Col aria-modal={2} className="img-hover text-white px-lg-0">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1570786261/hoverSet-3_usk5ml.jpg" alt="" />
                        <div className="hover-overlay"></div>
                    </Col>
                    <Col lg={9} className="">
                        <Card.Body>
                            <div className='tag-container'>
                                <Card.Tag>News</Card.Tag>
                            </div>
                            <Link to="/post" className="link-dark">
                                <h2 className="post-title">Article heading goes here</h2>
                            </Link>

                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui, minima labore quae unde omnis, blanditiis natus voluptates iure quam alias corporis veritatis esse ratione, cum officiis laudantium. Aut, saepe.

                            </div>
                            <p className="post-meta mt-2">
                                <Author />
                            </p>

                        </Card.Body>

                    </Col>



                </Row>

            </Card>
            <hr class="my-4" />
        </>


    )
}

function FeaturedPosts() {
    return (
        <section className="pb-5">
            <Container className="px-5 my-5">
                <Row className="gx-5 justify-content-center">
                    <Col lg={8} xl={6} className="mb-4" >

                        <h2 className="fw-bolder text-center">Featured Posts</h2>

                    </Col>
                </Row>
                <Row className="gx-5">
                    <FeaturedPostCard />
                    <FeaturedPostCard />
                    <FeaturedPostCard />
                </Row>


            </Container>
        </section>
    )
}


export default class Post extends Component {
    render() {
        return (
            <div>Post</div>
        )
    }
}

export { Post, FeaturedPosts, FeaturedPostCard, FeaturePostLarge, PostCard }