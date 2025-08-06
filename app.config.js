import 'dotenv/config';
import { version } from 'react';

export default {
    expo: {
        name: "TransitApp",
        slug: "transit-app",
        version: "1.0.0",
        extra: {
            API_KEY: process.env.API_KEY,
        },
    },
};