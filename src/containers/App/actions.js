import { type InitiateApp, actionKeys } from './types';

const initiateApp = (): InitiateApp => {
  return {type: actionKeys.INITIATE_APP}
}
