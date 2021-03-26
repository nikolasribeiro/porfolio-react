import { blogPost } from "../data/BlogPosts"

export const getBlogBySlug = (slug) => {
    return blogPost.find(blog => blog.slug === slug);
}