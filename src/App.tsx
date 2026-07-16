import { useState } from 'react';
import { destinations } from './data/destinations';
import { mrToAvios } from './lib/avios';
import { PointsInput } from './components/PointsInput';
import { DestinationSelect } from './components/DestinationSelect';
import { ScenarioGrid } from './components/ScenarioGrid';
import { MixedPaymentSection } from './components/MixedPaymentSection';
import { RulesNotice } from './components/RulesNotice';

function App() {
  const [mrPoints, setMrPoints] = useState(84860);
  const [destinationCode, setDestinationCode] = useState(destinations[0].code);

  const avios = mrToAvios(mrPoints);
  const destination = destinations.find((d) => d.code === destinationCode) ?? destinations[0];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10 space-y-6">
        <header>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Avios-laskuri</h1>
          <p className="text-slate-500 mt-1">
            Muunna American Express Membership Rewards -pisteet Finnair Avioksiksi ja tarkista,
            mihin kohteisiin ne riittävät.
          </p>
        </header>

        <PointsInput value={mrPoints} onChange={setMrPoints} />

        <div className="bg-white rounded-xl shadow p-4 sm:p-6 text-center">
          <p className="text-sm text-slate-500">Vastaava Avios-määrä</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">
            {avios.toLocaleString('fi-FI')} Avios
          </p>
          <p className="text-xs text-slate-400 mt-1">Muunnossuhde: 17 MR = 10 Avios</p>
        </div>

        <DestinationSelect value={destinationCode} onChange={setDestinationCode} />

        <ScenarioGrid destination={destination} availableAvios={avios} />

        <MixedPaymentSection destination={destination} availableAvios={avios} />

        <RulesNotice />
      </div>
    </div>
  );
}

export default App;
