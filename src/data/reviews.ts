type Review = {
    name: string;
    text: string;
    rating: number;
    country: string;
};

export const reviews: Review[] = [
    {
        name: "Jane Doe",
        text: "Working with Akshit was a fantastic experience. Highly professional and skilled!",
        rating: 5,
        country: "USA"
    },
    {
        name: "John Smith",
        text: "Delivered the project on time and exceeded all expectations. I would highly recommend.",
        rating: 5,
        country: "Canada"
    }
];