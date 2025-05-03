import Fastify from 'fastify';
import cors from '@fastify/cors';
import { allHooks, getHookById } from './hooks';
import { hookRequestSchema } from './validate';
import { FhirClient } from './fhir-client';
import { logger } from './logger';

const fastify = Fastify({ logger });
await fastify.register(cors);

fastify.get('/cds-services', async (_req, reply) => {
  const services = allHooks.map(hook => ({
    id: hook.id,
    hook: hook.hook,
    title: hook.title,
    description: hook.description,
    prefetch: hook.prefetch || {}
  }));
  reply.send({ services });
});

fastify.post<{ Body: any }>('/cds-services/:hookId', {
  schema: { body: hookRequestSchema }
}, async (request, reply) => {
  const hookId = request.params.hookId;
  const hook = getHookById(hookId);
  if (!hook) {
    logger.warn(`Unknown hookId: ${hookId}`);
    return reply.status(404).send({ error: 'Unknown hook' });
  }

  const { body } = request;
  logger.info({ hookId, context: body.context }, 'Evaluating CDS Hook');

  try {
    const fhirClient = body.fhirServer
      ? new FhirClient({ fhirServer: body.fhirServer, token: body.context?.access_token })
      : undefined;

    const deref = async (reference: string) => {
      if (!fhirClient) throw new Error('No fhirServer provided for dereferencing');
      return await fhirClient.dereference(reference);
    };

    const cards = await hook.handle(body, deref);
    reply.send({ cards });
  } catch (err: any) {
    logger.error({ err }, 'Error evaluating hook');
    reply.status(500).send({ error: err.message });
  }
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  logger.info(`CDS Hooks server running at ${address}`);
});
