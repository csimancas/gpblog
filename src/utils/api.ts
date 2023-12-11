const dev = true;

export const CREATE_ENTRY = dev
  ? 'http://10.0.2.2:4001/api/entries/create'
  : 'http://10.0.2.2:4001/api/entries/create';

export const GET_ENTRIES = dev
  ? 'http://10.0.2.2:4001/api/entries/'
  : 'http://10.0.2.2:4001/api/entries/';
