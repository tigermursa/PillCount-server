export interface IMedicine {
  id?: string;
  name: string;
  totalTablets: number;
  tabletsToTake: number;
  daysRemaining?: number;
  price: number;
  isOver: boolean;
}
