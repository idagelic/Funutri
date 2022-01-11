import Header from '@/modules/header/header.js';
import Cta from '@/modules/cta/cta.js';
import Testimonials from '@/modules/testimonials/testimonials.js';
import Footer from '@/modules/footer';
import BlogPosts from '@/modules/BlogPosts/blogPosts';

import { getPosts } from 'helper';

const Hello = ({ blogPosts }) => {
    return (
        <>
            <Header />
            <Cta />
            <Testimonials />
            <BlogPosts posts={blogPosts} />
            <Footer />
        </>
    );
};

export async function getStaticProps() {
    const blogPosts = await getPosts();

    return {
        props: { blogPosts },
    };
}

export default Hello;
