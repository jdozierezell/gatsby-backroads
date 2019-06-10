import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Images from '../examples/Images'

const blog = () => {
    return (
        <Layout>
            <Images />
            hello from blog page<Link to="/">Home</Link>
        </Layout>
    )
}

export default blog
