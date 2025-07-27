"use client";

import { getBlogs } from '@/graphql';
import { BlogProps } from '@/types';
import { useEffect, useState } from 'react';
import BlogList from '../contents/blog-list';
import AnimationContainer from '../utils/animation-container';
import Heading from '../utils/heading';
import Searchbar from '../utils/searchbar';
import Wrapper from '../utils/wrapper';

const BlogSection = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredBlogs, setFilteredBlogs] = useState<BlogProps[]>([]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);

        const data = blogs?.map((item: any) => item.node);
        let a = blogs.some

        const filtered = data?.filter((blog: any) =>
            blog.title.toLowerCase().includes(query.toLowerCase()) ||
            // NOTE: we want to check if at least one category's name includes the query so we used some here
            blog.categories.some((category: any) =>
                category.name.toLowerCase().includes(query.toLowerCase())
            )
        );

        setFilteredBlogs(filtered);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogs();
                setBlogs(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);


    return (
        <Wrapper>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
                <Heading title="My Thoughts" />
                <AnimationContainer className="w-full flex flex-col mb-8">
                    <p className="text-base text-justify lg:leading-8 text-foreground/80">
                        Welcome to my digital lab! Here I explore the practical side of artificial intelligence, breaking down the complex problems I've tackled in my projects. I'll share insights from my journey into machine learning, data security, and generative AI, offering the tips and clear explanations I wish I had. My goal is to demystify the tech and document the real-world process of building intelligent, secure solutions.
                    </p>
                </AnimationContainer>

                <Searchbar
                    searchQuery={searchQuery}
                    handleSearch={handleSearch}
                />

                <BlogList
                    blogs={blogs}
                    isLoading={isLoading}
                    searchQuery={searchQuery}
                    filteredBlogs={filteredBlogs}
                />
            </div>
        </Wrapper>
    )
};

export default BlogSection
