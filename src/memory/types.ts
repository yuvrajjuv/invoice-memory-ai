export type Confidence = number; // 0.0 → 1.0

export interface MemoryRecord<T> {
  value: T;
  confidence: Confidence;
  lastUpdated: string;
  sourceInvoice: string;
}

export interface VendorMemory {
  [vendorName: string]: {
    [pattern: string]: MemoryRecord<any>;
  };
}

export interface CorrectionMemory {
  [correctionType: string]: MemoryRecord<any>;
}

export interface ResolutionMemory {
  [issueType: string]: {
    approved: number;
    rejected: number;
  };
}