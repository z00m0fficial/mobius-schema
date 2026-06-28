export type MobiusMaturity = "vision" | "documented" | "architected" | "implemented" | "integrated" | "production" | "self-optimizing";

export interface MobiusIdentityRef {
  id: string;
  type: "human" | "ai-department" | "service" | "api-client";
  displayName: string;
  role?: string;
}

export interface RepositoryDna {
  repository: string;
  product: string;
  capability: string;
  department: string;
  owner: string;
  mission: string;
  maturity: MobiusMaturity;
  consumes: string[];
  produces: string[];
  schemas: string[];
  events: string[];
  dependencies: string[];
  dependents: string[];
  memoryEvents: string[];
  pulseMetrics: string[];
  architectureVersion: string;
  genesisVersion: string;
  canonVersion: string;
  lastReview?: string;
  lastSync?: string;
}

export interface PlatformChangeProposal {
  id: string;
  title: string;
  status: "draft" | "approved" | "in-progress" | "verified" | "rejected";
  requestedBy: MobiusIdentityRef;
  approvedBy?: MobiusIdentityRef;
  affectedRepositories: string[];
  reason: string;
  expectedOutcome: string;
  createdAt: string;
}

export interface MemoryEvent {
  id: string;
  timestamp: string;
  organizationId: string;
  actor: MobiusIdentityRef;
  eventType: string;
  title: string;
  summary: string;
  confidence: number;
  verified: boolean;
  linkedRepositories: string[];
  relatedEvents: string[];
  approvedBy?: MobiusIdentityRef;
}

export interface PulseMetricSnapshot {
  id: string;
  timestamp: string;
  organizationId: string;
  metric: string;
  value: number;
  unit: "score" | "percent" | "milliseconds" | "seconds" | "count";
  confidence: number;
  source: string;
}

export interface MobiusEvent<TPayload = unknown> {
  id: string;
  name: string;
  version: string;
  timestamp: string;
  source: string;
  organizationId: string;
  actor?: MobiusIdentityRef;
  payload: TPayload;
  correlationId?: string;
}

export interface TaskEnvelope {
  id: string;
  title: string;
  requester: MobiusIdentityRef;
  targetRepository?: string;
  capability: string;
  objective: string;
  acceptanceCriteria: string[];
  validationCommands: string[];
}

export interface SyncReport {
  id: string;
  timestamp: string;
  status: "synchronized" | "partial" | "blocked";
  repositoriesUpdated: string[];
  repositoriesPending: string[];
  notes: string[];
}
