import { HookService } from '../types';
import { HookRequest } from '../types';

export const orderSignHook: HookService = {
  id: 'order-sign',
  hook: 'order-sign',
  title: 'Order Sign',
  description: 'Triggered when a provider signs an order',
  prefetch: {
    serviceRequest: 'ServiceRequest?status=draft',
    coverage: 'Coverage?patient={{context.patientId}}',
    patient: 'Patient/{{context.patientId}}'
  },
  handle: async (req: HookRequest, deref) => {
    const sr = req.prefetch?.serviceRequest;
    const coverage = req.prefetch?.coverage;

    if (!sr || !coverage) {
      return [{
        summary: 'Missing data for coverage discovery',
        indicator: 'warning',
        detail: 'ServiceRequest or Coverage not found in prefetch. Check the EHR hook configuration.',
        source: { label: 'Coverage Discovery Service' }
      }];
    }

    const code = sr.code?.coding?.[0]?.code;
    const payerId = coverage.payor?.[0]?.identifier?.value || 'unknown';

    // Fake logic for demo — in real use this may check a rules database
    const paRequired = ['27279', '62287'].includes(code);

    return [{
      summary: paRequired
        ? `Prior authorization likely required for ${code}`
        : `No PA needed for ${code}`,
      indicator: paRequired ? 'warning' : 'info',
      detail: `Determined by coverage discovery rules for payer ${payerId}.`,
      source: { label: 'Coverage Discovery Service' },
      links: paRequired
        ? [{
            label: 'Launch DTR App',
            url: 'https://example.com/dtr',
            type: 'smart'
          }]
        : []
    }];
  }
};
