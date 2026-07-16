import { useState } from 'react';
import type { Destination } from '../data/destinations';

type MixedPaymentSectionProps = {
  destination: Destination;
  availableAvios: number;
};

export function MixedPaymentSection({ destination, availableAvios }: MixedPaymentSectionProps) {
  const [legs, setLegs] = useState(1);

  // Montako suuntaa Avios-saldo riittää kattamaan kokonaan tällä kohteella.
  const fullyCoveredLegs = Math.min(
    legs,
    Math.floor(availableAvios / destination.economyAviosOneWay),
  );
  const aviosNeededForAllLegs = destination.economyAviosOneWay * legs;
  const remainingAvios = availableAvios - aviosNeededForAllLegs;

  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      <h3 className="text-sm font-medium text-slate-600 mb-2">Avios + raha</h3>
      <label htmlFor="legs" className="block text-sm text-slate-500 mb-1">
        Award-suuntien määrä: {legs}
      </label>
      <input
        id="legs"
        type="range"
        min={0}
        max={4}
        step={1}
        value={legs}
        onChange={(e) => setLegs(Number(e.target.value))}
        className="w-full accent-blue-600 mb-3"
      />
      <p className="text-slate-700">
        Avios riittää <span className="font-semibold">{fullyCoveredLegs}</span> / {legs} suuntaan
        kokonaan.
      </p>
      <p className="text-sm text-slate-500 mt-1">
        {remainingAvios >= 0
          ? `Avios-saldoa jää yli: ${remainingAvios.toLocaleString('fi-FI')} Avios`
          : `Avios-vajaus: ${Math.abs(remainingAvios).toLocaleString('fi-FI')} Avios (loput maksettava rahalla tai siirrettävä lisää pisteitä)`}
      </p>
    </div>
  );
}
