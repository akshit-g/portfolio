"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const Head = () => {
    const pathname = usePathname();
    const title = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

    const meta = {
        title: `Akshit Gandotra ${pathname === "/" ? "" : "• " + title.replace(/[-/]/g, " ")}`,
        description: "I'm an ML engineer and a cybersecurity analyst. I love to build things and find out what makes everything work. I love to learn new things and I'm always looking for new challenges.",
        keywords: "Akshit Gandotra, AI Developer, Software Engineer, Cybersecurity Analyst, ML Engineer",
        type: "website",
    };

    return (
        <>
            <title>{meta.title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
            <meta name='robots' content='follow, index' />
            <meta content={meta.description} name='description' />
            <meta name='keywords' content={meta.keywords} />
            <meta property='og:url' content={`https://shreyas-sihasane.vercel.app${pathname}`} />
            <link rel='canonical' href={`https://shreyas-sihasane.vercel.app${pathname}`} />
            <link rel='me' href='mailto:gandotra.akshit@gmail.com' />
            <meta property='og:type' content={meta.type} />
            <meta property='og:site_name' content='Akshit Gandotra' />
            <meta property='og:description' content={meta.description} />
            <meta property='og:title' content={meta.title} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@aksh_gandotra' />
            <meta name='twitter:title' content={meta.title} />
            <meta name='twitter:description' content={meta.description} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <meta name="theme-color" content="#000000" />
        </>
    )
}

export default Head;
