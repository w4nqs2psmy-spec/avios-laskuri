import type { Destination } from '../data/destinations';

// American Express Membership Rewards -> Finnair Avios -muunnossuhde: 17 MR = 10 Avios.
// Pyöristetään aina alaspäin, koska Amex ei anna osittaisia Avioseja.
export function mrToAvios(mrPoints: number): number {
  return Math.floor((mrPoints * 10) / 17);
}

export type Passengers = 1 | 2;
export type TripType = 'oneway' | 'roundtrip';

// Award-hinta on aina suuntakohtainen, joten meno-paluu = 2x ja matkustajat kertovat suoraan.
export function costFor(
  destination: Destination,
  passengers: Passengers,
  tripType: TripType,
): number {
  const legs = tripType === 'roundtrip' ? 2 : 1;
  return destination.economyAviosOneWay * legs * passengers;
}

export type Coverage = {
  required: number;
  covered: boolean;
  difference: number; // positiivinen = ylijäämä, negatiivinen = vajaus
};

export function evaluateCoverage(availableAvios: number, required: number): Coverage {
  return {
    required,
    covered: availableAvios >= required,
    difference: availableAvios - required,
  };
}
