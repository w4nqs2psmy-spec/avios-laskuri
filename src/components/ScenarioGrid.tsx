import type { Destination } from '../data/destinations';
import { costFor, evaluateCoverage } from '../lib/avios';
import { ScenarioCard } from './ScenarioCard';

type ScenarioGridProps = {
  destination: Destination;
  availableAvios: number;
};

export function ScenarioGrid({ destination, availableAvios }: ScenarioGridProps) {
  const scenarios = [
    { title: '1 hlö, yhdensuuntainen', passengers: 1 as const, tripType: 'oneway' as const },
    { title: '1 hlö, meno-paluu', passengers: 1 as const, tripType: 'roundtrip' as const },
    { title: '2 hlö, yhdensuuntainen', passengers: 2 as const, tripType: 'oneway' as const },
    { title: '2 hlö, meno-paluu', passengers: 2 as const, tripType: 'roundtrip' as const },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {scenarios.map((s) => {
        const required = costFor(destination, s.passengers, s.tripType);
        const coverage = evaluateCoverage(availableAvios, required);
        return <ScenarioCard key={s.title} title={s.title} coverage={coverage} />;
      })}
    </div>
  );
}
