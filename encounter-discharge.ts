import { HookService } from '../types';

export const encounter-dischargeHook: HookService = {
  id: 'encounter-discharge',
  hook: 'encounter-discharge',
  title: 'Encounter Discharge',
  description: 'Triggered for encounter-discharge',
  prefetch: {},
  handle: async (_req, _deref) => [
    {
      summary: 'Encounter Discharge triggered',
      indicator: 'info',
      source: { label: 'CDS Hooks Server' }
    }
  ]
};
