import { MemoryStore } from "./store";

export function recallVendorField(
  memory: MemoryStore,
  vendor: string,
  field: string
): string | null {
  const vendorMem = memory.vendorMemory[vendor];
  if (!vendorMem) return null;

  const record = vendorMem[field];
  if (!record) return null;

  return record.value;
}

export function learnVendorField(
  memory: MemoryStore,
  vendor: string,
  field: string,
  normalizedField: string,
  invoiceId: string
) {
  if (!memory.vendorMemory[vendor]) {
    memory.vendorMemory[vendor] = {};
  }

  memory.vendorMemory[vendor][field] = {
    value: normalizedField,
    confidence: 0.6,
    lastUpdated: new Date().toISOString(),
    sourceInvoice: invoiceId
  };
}

import { increaseConfidence, decreaseConfidence } from "./confidence";

export function applyHumanFeedback(
  memory: any,
  vendor: string,
  field: string,
  approved: boolean
) {
  const record = memory.vendorMemory?.[vendor]?.[field];
  if (!record) return;

  record.confidence = approved
    ? increaseConfidence(record.confidence)
    : decreaseConfidence(record.confidence);

  record.lastUpdated = new Date().toISOString();
}