import { HookService } from '../types';

export const patient-viewHook: HookService = {
  id: 'patient-view',
  hook: 'patient-view',
  title: 'Patient View',
  description: 'Triggered for patient-view',
  prefetch: {},
  handle: async (_req, _deref) => [
    {
      summary: 'Patient View triggered',
      indicator: 'info',
      source: { label: 'CDS Hooks Server' }
    }
  ]
};
