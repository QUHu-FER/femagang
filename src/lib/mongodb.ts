import dns from 'dns';
import mongoose from 'mongoose';

// Force Cloudflare + Google DNS — prevents ETIMEOUT on SRV lookups
dns.setServers(['1.1.1.1', '8.8.8.8', '1.0.0.1', '8.8.4.4']);

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = global as typeof globalThis & { mongoose: MongooseCache };

if (!globalWithMongoose.mongoose) {
    globalWithMongoose.mongoose = { conn: null, promise: null };
}

const cached = globalWithMongoose.mongoose;

async function dbConnect(): Promise<typeof mongoose> {
    // Validate at runtime (not module load / build time)
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
        throw new Error('MONGODB_URI belum diset di environment variables');
    }

    // Return existing healthy connection
    if (cached.conn && mongoose.connection.readyState === 1) {
        return cached.conn;
    }

    // If connection is broken, reset cache so we reconnect
    if (cached.conn && mongoose.connection.readyState !== 1) {
        cached.conn = null;
        cached.promise = null;
    }

    if (!cached.promise) {
        const opts: mongoose.ConnectOptions = {
            bufferCommands: true,
            serverSelectionTimeoutMS: 8000,
            socketTimeoutMS: 20000,
            connectTimeoutMS: 8000,
            maxPoolSize: 10,
            minPoolSize: 1,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        cached.conn = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
