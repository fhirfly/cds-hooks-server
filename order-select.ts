import { HookService } from '../types';

export const order-selectHook: HookService = {
  id: 'order-select',
  hook: 'order-select',
  title: 'Order Select',
  description: 'Triggered for order-select',
  prefetch: {},
  handle: async (_req, _deref) => [
    {
      summary: 'Order Select triggered',
      indicator: 'info',
      source: { label: 'CDS Hooks Server' }
    }
  ]
};
