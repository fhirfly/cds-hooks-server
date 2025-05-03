import { HookService } from '../types';

export const order-signHook: HookService = {
  id: 'order-sign',
  hook: 'order-sign',
  title: 'Order Sign',
  description: 'Triggered for order-sign',
  prefetch: {},
  handle: async (_req, _deref) => [
    {
      summary: 'Order Sign triggered',
      indicator: 'info',
      source: { label: 'CDS Hooks Server' }
    }
  ]
};
