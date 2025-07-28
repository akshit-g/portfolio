// "use server";

// import { getReviewsData } from "@/graphql";

// const getReviews = async () => {
//     try {
//         const reviews = await getReviewsData();
        
//         const data = reviews?.map((item: any) => item.node);

//         return data;
//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// };

// export default getReviews;

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