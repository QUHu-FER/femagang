/**
 * Simple in-memory response cache for API routes.
 * Survives across requests within the same Node.js process (Next.js dev & prod).
 * Key = cache key string, Value = { data, expires }
 */

interface CacheEntry<T> {
    data: T;
    expires: number;
}

// Store on globalThis so it persists across Next.js hot-reloads in dev
const globalCache = global as typeof globalThis & {
    __apiCache?: Map<string, CacheEntry<unknown>>;
};

if (!globalCache.__apiCache) {
    globalCache.__apiCache = new Map();
}

const store = globalCache.__apiCache;

export function cacheGet<T>(key: string): T | null {
    const entry = store.get(key) as CacheEntry<T> | undefined;
    if (!entry) return null;
    if (Date.now() > entry.expires) {
        store.delete(key);
        return null;
    }
    return entry.data;
}

export function cacheSet<T>(key: string, data: T, ttlSeconds = 60): void {
    store.set(key, { data, expires: Date.now() + ttlSeconds * 1000 });
}

export function cacheDelete(pattern?: string): void {
    if (!pattern) {
        store.clear();
        return;
    }
    for (const key of store.keys()) {
        if (key.startsWith(pattern)) store.delete(key);
    }
}
