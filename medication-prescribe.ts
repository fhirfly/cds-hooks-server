import { HookService } from '../types';

export const medication-prescribeHook: HookService = {
  id: 'medication-prescribe',
  hook: 'medication-prescribe',
  title: 'Medication Prescribe',
  description: 'Triggered for medication-prescribe',
  prefetch: {},
  handle: async (_req, _deref) => [
    {
      summary: 'Medication Prescribe triggered',
      indicator: 'info',
      source: { label: 'CDS Hooks Server' }
    }
  ]
};
