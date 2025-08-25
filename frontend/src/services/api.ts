import { Unit, APIResponse } from '../types/Unit';

const API_BASE_URL = 'http://localhost:3001/api';

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const unitsAPI = {
  // Get all units
  getAllUnits: async (): Promise<Unit[]> => {
    const response = await fetch(`${API_BASE_URL}/units`);
    const data = await handleResponse<APIResponse<Unit[]>>(response);
    return data.data;
  },
  
  // Get single unit
  getUnit: async (id: string): Promise<Unit> => {
    const response = await fetch(`${API_BASE_URL}/units/${id}`);
    const data = await handleResponse<APIResponse<Unit>>(response);
    return data.data;
  }
};