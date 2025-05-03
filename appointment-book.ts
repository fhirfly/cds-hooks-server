import { HookService } from '../types';

export const appointment-bookHook: HookService = {
  id: 'appointment-book',
  hook: 'appointment-book',
  title: 'Appointment Book',
  description: 'Triggered for appointment-book',
  prefetch: {},
  handle: async (_req, _deref) => [
    {
      summary: 'Appointment Book triggered',
      indicator: 'info',
      source: { label: 'CDS Hooks Server' }
    }
  ]
};
