# Avios-laskuri

Selainpohjainen laskuri, joka muuntaa American Express Membership Rewards (MR) -pisteet
Finnair Avioksiksi ja näyttää, mihin award-lentoihin pisteet riittävät. Kaikki laskenta
tapahtuu selaimessa — sovelluksella ei ole backendiä.

## Käynnistys

```bash
npm install
npm run dev
```

Sovellus avautuu osoitteeseen, jonka Vite tulostaa terminaaliin (oletuksena `http://localhost:5173`).

## Laskentakaava

- MR → Avios: 17 MR-pistettä = 10 Avios-pistettä (pyöristetään aina alaspäin)
- Award-hinnat ovat suuntakohtaisia: meno-paluu = 2 × yhdensuuntainen hinta, ja matkustajamäärä kertoo suoraan

Logiikka on tiedostossa [`src/lib/avios.ts`](src/lib/avios.ts).

## Uuden kohteen lisääminen

Kohteet määritellään tiedostossa [`src/data/destinations.ts`](src/data/destinations.ts).
Lisää uusi rivi `destinations`-taulukkoon:

```ts
{ code: 'CDG', name: 'Pariisi', economyAviosOneWay: 12000 }
```

- `code` — vapaamuotoinen tunniste (käytetään valikon avaimena)
- `name` — näytettävä nimi
- `economyAviosOneWay` — economy-luokan Avios-hinta yhteen suuntaan
- `businessAviosOneWay` (valinnainen) — business-luokan hinta, kun se on tiedossa. Sitä ei vielä näytetä käyttöliittymässä, mutta data-malli tukee sitä valmiiksi.

## Muista ennen MR → Avios -siirtoa

- Surchaaret, verot ja matkustajamaksut maksetaan aina rahalla, ei Avioksilla
- Award-paikkoja on rajatusti — siirrä pisteet vasta kun paikka on varmistettu
- Siirto Membership Rewardsista Aviokseen on peruuttamaton
- Finnairissa voi yhdistää maksun: osa rahalla, osa Avioksilla
