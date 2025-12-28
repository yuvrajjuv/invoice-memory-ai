export type AuditStep = {
  step: "recall" | "apply" | "decide" | "learn";
  timestamp: string;
  details: string;
};

export type InvoiceOutput = {
  normalizedInvoice: any;
  proposedCorrections: any[];
  requiresHumanReview: boolean;
  reasoning: string;
  confidenceScore: number;
  memoryUpdates: string[];
  auditTrail: any[];
};