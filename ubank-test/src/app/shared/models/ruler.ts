import { Goal } from './goal';

export interface Ruler {
    goal: Goal;
    team?: string;
    event?: string;
    saving?: string;
}