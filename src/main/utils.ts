type Environment = 'test' | 'development' | 'production';

export const env: Environment = process.env.NODE_ENV as Environment;
