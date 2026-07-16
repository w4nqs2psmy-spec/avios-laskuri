export function RulesNotice() {
  return (
    <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 sm:p-6 text-sm text-amber-900">
      <h3 className="font-semibold mb-2">Muista tämä ennen siirtoa</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Surchaaret, verot ja matkustajamaksut maksetaan aina rahalla, ei Avioksilla.</li>
        <li>Award-paikkoja on rajatusti — siirrä pisteet Aviokseen vasta kun paikka on löytynyt.</li>
        <li>Siirto Membership Rewardsista Aviokseen on peruuttamaton.</li>
        <li>Finnairissa voi maksaa osan rahalla ja osan Avioksilla — katso "Avios + raha" -osio.</li>
      </ul>
    </div>
  );
}
