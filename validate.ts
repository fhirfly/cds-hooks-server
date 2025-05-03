export const hookRequestSchema = {
  type: 'object',
  required: ['hook', 'context'],
  properties: {
    hook: { type: 'string' },
    hookInstance: { type: 'string' },
    fhirServer: { type: 'string', format: 'uri' },
    context: { type: 'object' },
    prefetch: { type: 'object' }
  },
  additionalProperties: false
};
