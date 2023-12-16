import { createClient } from '@sanity/client';
import imageURLBuilder from '@sanity/image-url';


// export const client = createClient(
//     {
//         projectId : process.env.REACT_APP_SANITY_PROJECT_ID,
//         dataset : process.env.REACT_APP_SANITY_DATASET,
//         useCdn : true,
//         token : process.env.REACT_APP_SANITY_TOKEN
//     }
// );

export const client = createClient(
    {
        projectId : 'bkzo13or',
        dataset : 'production',
        useCdn : true,
        apiVersion : '2023-05-03',
        token : 'skx5VZSDwgmuK7NogjTAPDqeiCaPtwpAOgV1ZaQaZaWTJyXlBHXFHxW7YQJy8mNmAu2VNsqkOdI4NhnJK44Ga7t3GrZsHZ6iA0bdWrtcoDcJU3c7WjlSQdBW65s0PdVs7iAT0lnS8DBsbasNEo3IV7rM5hlzAtFnjtrzZvn4r6pFepcWTtUe',
        ignoreBrowserTokenWarning : true
    }
);


const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);