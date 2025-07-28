"use server";

import { reviews } from '@/data/reviews';

const getReviews = async () => {
    try {
        const data = reviews.map((item: any) => ({ node: item }));
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getReviews;