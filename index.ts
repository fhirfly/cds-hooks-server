import { orderSignHook } from './order-sign';
import { orderSelectHook } from './order-select';
import { patientViewHook } from './patient-view';
import { encounterStartHook } from './encounter-start';
import { encounterDischargeHook } from './encounter-discharge';
import { medicationPrescribeHook } from './medication-prescribe';
import { appointmentBookHook } from './appointment-book';

export const allHooks = [
  orderSignHook,
  orderSelectHook,
  patientViewHook,
  encounterStartHook,
  encounterDischargeHook,
  medicationPrescribeHook,
  appointmentBookHook
];

export function getHookById(id: string) {
  return allHooks.find(h => h.id === id);
}
