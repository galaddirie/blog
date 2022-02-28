import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { PostCard } from '../../Posts/Post'

function LatestArticle() {
    return (
        <>
            <h1 class="fw-bolder fs-1 mb-4">Blender NPR Blog</h1>
            <div class="card border-0 shadow rounded-3 overflow-hidden">
                <div class="card-body p-0">
                    <div class="row gx-0">
                        <div class="col-lg-6 col-xl-5 py-lg-5">
                            <div class="p-4 p-md-5">
                                <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                <div class="h2 fw-bolder">Article heading goes here</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                                <a class="stretched-link text-decoration-none" href="#!">
                                    Read more
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-7"><div class="bg-featured-blog" style={{ "background-image": "url('https://dummyimage.com/700x350/343a40/6c757d')" }}></div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function BlogList() {
    return (
        <main>
            <Container className='px-5'>
                <LatestArticle />
                <PostCard />
            </Container>
        </main>


    )
}
