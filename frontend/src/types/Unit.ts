export interface Unit {
    id: string;
    unitNumber: string;
    floorPlan: '1bed' | '2bed' | '3bed';
    squareFootage: number;
    rent: number;
    floor: number;
    available: boolean;
    availableData?: string;
 }

export interface APIResponse<T> {
    success: boolean;
    data: T;
    total?: number;
    error?: string;
}