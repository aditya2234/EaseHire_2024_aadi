export interface Customer {
    id: number;
    name: string;
    contact: string;
    email: string;
    address: string;
    numberOfEmployees: number;
    projectsOngoing?: number[]; // Array of project IDs
    ageOfClient: number; // Age of the client relationship in years
    industry: string; // Industry the client belongs to
    revenue: number; // Annual revenue of the client
    notes: string; // Additional notes about the client
  }
  