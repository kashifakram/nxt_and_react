import { NextConfig } from "next";

const config: NextConfig = {
    experimental: {
        reactCompiler: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                port: '',
                pathname: '/weno-bucket/**',
                search: ''
            }
        ]
    },
    sassOptions: {
        additionalData: '$var: red;'
    }
}

export default config