import * as fs from "fs";
import * as path from "path";

export type MemoryStore = {
  vendorMemory: Record<string, any>;
  correctionMemory: Record<string, any>;
  resolutionMemory: Record<string, any>;
  meta: {
    lastUpdated: string | null;
  };
};

const MEMORY_PATH = path.resolve(
  process.cwd(),
  "src",
  "data",
  "memory.json"
);

export function loadMemory(): MemoryStore {
  const raw = fs.readFileSync(MEMORY_PATH, "utf-8");
  return JSON.parse(raw) as MemoryStore;
}

export function saveMemory(memory: MemoryStore): void {
  memory.meta.lastUpdated = new Date().toISOString();
  fs.writeFileSync(MEMORY_PATH, JSON.stringify(memory, null, 2));
}