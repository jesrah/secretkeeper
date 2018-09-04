/*
 *
 * HomePage actions
 *
 */

import { SUBMIT_SECRET } from './constants';

export function submitSecret(string) {
  return {
    type: SUBMIT_SECRET,
    string,
  };
}