/*
 *
 * HomePage actions
 *
 */

import { SUBMIT_SECRET } from './constants';

export function submitSecret(secret) {
  return {
    type: SUBMIT_SECRET,
    secret,
  };
}