import { BlogProps } from '@/types';

export const blogs: BlogProps[] = [
  {
    slug: "first-blog-post",
    title: "My First Blog Post",
    views: 120,
    description: "A short description of my first blog post.",
    content: "The full content of the blog post...",
    categories: [{ name: "Tech", description: "Technology" }],
    createdAt: "2024-07-27T10:00:00Z",
    publishedAt: "2024-07-27T12:00:00Z",
    hashnodeUrl: "https://your-hashnode-username.hashnode.dev/my-first-blog-post",
  },
  {
    slug: "second-blog-post",
    title: "Another Interesting Topic",
    views: 250,
    description: "Exploring another interesting topic in the world of tech.",
    content: "Full content here...",
    categories: [{ name: "Web Dev", description: "Web Development" }],
    createdAt: "2024-07-28T10:00:00Z",
    publishedAt: "2024-07-28T12:00:00Z",
    hashnodeUrl: "https://your-hashnode-username.hashnode.dev/another-interesting-topic",
  },
];
