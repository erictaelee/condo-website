export interface Unit {
    id: string;
    unitNumber: string;
    floorPlan: '1bed' | '2bed' | '3bed';
    squareFootage: number; 
    rent: number;
    floor: number;
    available: boolean;
    availableDate?: string;
    floorPlanImage?: string;
}