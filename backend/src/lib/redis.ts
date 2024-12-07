import Redis from "ioredis";
import { config } from "../config";

const redis = new Redis(config.redis.url);

// redis.on("error", (err) => console.error("Redis Client Error", err));
// redis.connect();

export default redis;
