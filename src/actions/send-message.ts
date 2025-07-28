// "use server";

// import { GraphQLClient, gql } from "graphql-request";
// import { z } from "zod";

// const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

// const graphcmsToken = process.env.HYGRAPH_TOKEN!;

// interface Props {
//     name: string;
//     email: string;
//     phone: string;
//     message: string;
// }

// const sendMessage = async ({ name, email, phone, message }: Props) => {
//     try {
//         const data = { name, email, phone, message };

//         const query = gql`
//             mutation CreateClient($name:String!, $email:String!, $phone:String!, $message:String!){
//                 createClient(data: {name: $name, email: $email, phone: $phone, message: $message}){id}
//             }
//         `;

//         const client = new GraphQLClient(graphqlAPI!, {
//             headers: {
//                 Authorization: `Bearer ${graphcmsToken!}`,
//             }
//         });

//         const result = await client.request(query, data);

//         return result;
//     } catch (error) {
//         if (error instanceof z.ZodError) {
//             return { error: "Invalid request data passed" };
//         }

//         return { error: "Unable to send Message" };
//     }
// };

// export default sendMessage;

"use server";

// This server action is no longer in use.
// The contact form functionality has been updated to use a client-side `mailto:` link,
// which is handled directly within the `src/components/contents/contact.tsx` component.
// This file can be safely deleted from the project.

import { z } from "zod";

const sendMessage = async () => {
    console.warn("sendMessage server action is deprecated and should not be called.");
    return { error: "This function is deprecated." };
};

export default sendMessage;
