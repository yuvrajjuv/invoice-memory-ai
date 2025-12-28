import { MemoryStore } from "../memory/store";

export function decideFromMemory(
  invoice: any,
  field: string,
  memory: MemoryStore
) {
  const value = invoice?.[field];

  if (value) {
    return {
      action: "accept",
      value,
      confidence: 0.95,
      reasoning: "High confidence from invoice data"
    };
  }

  return {
    action: "suggest",
    value: field,
    confidence: 0.7,
    reasoning: "Medium confidence – suggesting for human review"
  };
}