import { Realmtype } from "./realmtype.enum";

export interface Seat {
    id?: number,
    realmtype: Realmtype,
    section: string,
    seatNumber: string,
    isReserved: boolean,
}
