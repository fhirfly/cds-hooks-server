import { HookService } from '../types';

export const encounter-startHook: HookService = {
  id: 'encounter-start',
  hook: 'encounter-start',
  title: 'Encounter Start',
  description: 'Triggered for encounter-start',
  prefetch: {},
  handle: async (_req, _deref) => [
    {
      summary: 'Encounter Start triggered',
      indicator: 'info',
      source: { label: 'CDS Hooks Server' }
    }
  ]
};
