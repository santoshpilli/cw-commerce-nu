import { v4 as uuidv4 } from 'uuid';

export const generateCustomerId = () => {
  return uuidv4().replace(/-/g, '').toUpperCase();
};