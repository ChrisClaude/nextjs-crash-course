const dev = process.env.NODE_ENV !== 'prodction';

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com';
