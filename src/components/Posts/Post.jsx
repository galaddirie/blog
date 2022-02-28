import "./Post.css"
import React, { Component } from 'react'

import { Container, Row, Col, Card, CardImg, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


Card.Tag = ({ children }) => {
    return (
        <div className="badge bg-gradient rounded-pill mb-2 me-2" style={{ 'background-color': '#FF2867', }}>{children}</div>
    )
}
function FeaturedPostCard() {
    return (
        <Col lg={4} className="mb-5 d-block">
            <Card className="h-100 shadow border-0 post-card" >
                <Link to={`/blog`}>
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
                        <Link to={`/blog`} class="stretched-link text-decoration-none ms-3">
                            Read more
                            <i class="bi bi-arrow-right"></i>
                        </Link>
                    </p>

                </Card.Body>

                <Card.Footer className="p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to={`/user`}><img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="user icon" width={40} height={40} /></Link>
                            <div className="small">
                                <Link to={`/user`}><div className="fw-bold">Galad</div></Link>
                                <div className="text-muted">March 12, 2021 &middot; 6 min read</div>
                            </div>
                        </div>

                    </div>
                </Card.Footer>
            </Card>
        </Col>
    )
}

function PostCard() {
    return (

        <div class="py-5">
            <h3 class="font-weight-bold mb-0">Demo 1</h3>
            <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="row">
                <Card className="ps-0 ">
                    <Row className="g-0">
                        <Col md={4}>
                            <div className="img-hover text-white">
                                <Card.Img src="https://res.cloudinary.com/mhmd/image/upload/v1570786261/hoverSet-3_usk5ml.jpg" alt="" />
                                <div className="hover-overlay"></div>
                            </div>
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos totam provident nihil quas tenetur a, laboriosam, id sapiente harum commodi labore reprehenderit, obcaecati aperiam asperiores voluptate. Vero, doloribus accusantium.
                            </Card.Body>
                        </Col>
                    </Row>


                </Card>

            </div>
        </div>

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

export { Post, FeaturedPosts, FeaturedPostCard, PostCard }