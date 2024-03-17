import { config } from 'dotenv';
config();

import type { Config } from 'drizzle-kit';
const { DATABASE_URL } = process.env;
if (!DATABASE_URL) {
	throw new Error('No url');
}
export default {
	schema: './src/lib/db/schema.ts',
	out: './src/lib/db/migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: DATABASE_URL
	}
} as Config;
