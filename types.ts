export interface HookRequest {
  hook: string;
  hookInstance?: string;
  fhirServer?: string;
  context: Record<string, any>;
  prefetch?: Record<string, any>;
}

export interface CdsCard {
  summary: string;
  detail?: string;
  indicator: 'info' | 'warning' | 'critical';
  source?: { label: string };
  links?: { label: string; url: string; type: 'smart' | 'absolute' };
  suggestions?: any[];
  overrideReason?: {
    reason: string;
    documentation?: string;
  };
}

export interface PrefetchTemplate {
  [key: string]: string;
}

export interface HookService {
  id: string;
  hook: string;
  title: string;
  description: string;
  prefetch?: PrefetchTemplate;
  handle: (
    request: HookRequest,
    fhirDereference: (reference: string) => Promise<any>
  ) => Promise<CdsCard[]>;
}
