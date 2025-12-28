export type DecisionAction = "auto_apply" | "suggest" | "ignore";

export type DecisionResult = {
  action: DecisionAction;
  value: string | null;
  confidence: number;
  reasoning: string;
};