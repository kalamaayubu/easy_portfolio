/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bslklinyfamzlpwrstws.supabase.co',
                pathname: '/storage/v1/object/public/**',
            }
        ]
    }
};

export default nextConfig;
