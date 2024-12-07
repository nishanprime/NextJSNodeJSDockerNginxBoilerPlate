import { Kafka } from "kafkajs";
import { config } from "../config";

const kafka = new Kafka({
  clientId: "ticket-booking-service",
  brokers: config.kafka.brokers,
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "ticket-booking-group" });

export const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
  console.log("Kafka connected successfully!");
};

export const topics = {
  TICKET_AVAILABILITY: "ticket_availability",
  PAYMENT_NOTIFICATIONS: "payment_notifications",
} as const;
