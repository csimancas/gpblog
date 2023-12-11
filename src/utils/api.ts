const dev = false;

export const CREATE_ENTRY = dev
  ? 'http://10.0.2.2:4001/api/entries/create'
  : 'https://gpblog-109d6b1b1f85.herokuapp.com/api/entries/create';

export const GET_ENTRIES = dev
  ? 'http://10.0.2.2:4001/api/entries/'
  : 'https://gpblog-109d6b1b1f85.herokuapp.com/api/entries/';
