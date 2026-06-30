type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, RateLimitRecord>();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export function rateLimit(
  key: string,
  limit = 10,
  windowMs = 60_000,
): RateLimitResult {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });
    cleanupExpiredBuckets(now);

    return {
      allowed: true,
      remaining: limit - 1,
      resetAt,
    };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: current.resetAt,
    };
  }

  current.count += 1;

  return {
    allowed: true,
    remaining: Math.max(limit - current.count, 0),
    resetAt: current.resetAt,
  };
}

function cleanupExpiredBuckets(now: number) {
  if (buckets.size < 1_000) {
    return;
  }

  for (const [key, record] of buckets.entries()) {
    if (record.resetAt <= now) {
      buckets.delete(key);
    }
  }
}
