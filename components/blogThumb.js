import Testimonial from '@/components/testimonial';

const BlogThumb = ({ imgSrc, title, slug }) => (
    <Testimonial caption={title} imageSrc={imgSrc} linkTo={`/blog/${slug}`} />
);

export default BlogThumb;
