import { NextConfig } from "next";

const config: NextConfig = {
    output: 'export',
    // basePath: process.env.NODE_ENV === 'production' ? '/nxt_and_react' : '',
    // images: {
    //     // domains: ['http://192.168.1.103:3000', 'http://localhost:3000', 'https://kashifakram.github.io/nxt_and_react'],
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 's3.amazonaws.com',
    //             port: '',
    //             pathname: '/weno-bucket/**',
    //             search: ''
    //         }
    //     ]
    // },
    sassOptions: {
        additionalData: '$var: red;'
    }
}

export default config