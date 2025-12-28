import { decideFromMemory } from "./decisionEngine";
import { InvoiceOutput } from "./outputTypes";
import { MemoryStore } from "../memory/store";

export function processInvoice(
  invoice: any,
  memory: MemoryStore
): InvoiceOutput {
  const decision = decideFromMemory(invoice, "serviceDate", memory);

  return {
    normalizedInvoice: invoice,
    proposedCorrections: decision.value ? [decision.value] : [],
    requiresHumanReview: decision.confidence < 0.8,
    reasoning: decision.reasoning,
    confidenceScore: decision.confidence,
    memoryUpdates: [],
    auditTrail: []
  };
}