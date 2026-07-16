// Kohdetaulukko Finnairin award-lentojen Avios-hinnoille.
//
// Uuden kohteen lisäys: kopioi rivi ja täytä kentät.
// businessAviosOneWay on valinnainen — jätä pois, jos business-hintaa ei tunneta vielä.
//
// Esimerkki:
// { code: 'CDG', name: 'Pariisi', economyAviosOneWay: 12000 }

export type Destination = {
  code: string;
  name: string;
  economyAviosOneWay: number;
  businessAviosOneWay?: number;
};

export const destinations: Destination[] = [
  { code: 'SIN', name: 'Singapore (HEL–SIN)', economyAviosOneWay: 30000 },
  { code: 'HND', name: 'Tokio (HEL–HND/NRT)', economyAviosOneWay: 30000 },
  { code: 'BKK', name: 'Bangkok (HEL–BKK)', economyAviosOneWay: 30000 },
  { code: 'CEU', name: 'Keski-Eurooppa (esim. Frankfurt, Lontoo)', economyAviosOneWay: 12000 },
  { code: 'NEU', name: 'Pohjois-Eurooppa (vyöhyke 1)', economyAviosOneWay: 9000 },
];
