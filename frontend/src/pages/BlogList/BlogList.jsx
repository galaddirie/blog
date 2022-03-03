import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { FeaturePostLarge, PostCard } from '../../components/Posts/Post'
import './blog.css'


export default function BlogList() {
    return (
        <main>
            <Container className='px-5'>
                <h1 className="fw-bolder fs-1 mb-4">Blender NPR Blog</h1>
                <FeaturePostLarge />
                <h3 className="font-weight-bold mb-0 mt-5">Recent Posts</h3>
                <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className='' >

                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>

            </Container>
        </main>


    )
}
