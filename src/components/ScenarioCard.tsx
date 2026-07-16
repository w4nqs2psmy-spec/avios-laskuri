import type { Coverage } from '../lib/avios';

type ScenarioCardProps = {
  title: string;
  coverage: Coverage;
};

export function ScenarioCard({ title, coverage }: ScenarioCardProps) {
  const { required, covered, difference } = coverage;

  return (
    <div
      className={`rounded-xl shadow p-4 sm:p-5 ${
        covered ? 'bg-green-50 border border-green-300' : 'bg-slate-100 border border-slate-300'
      }`}
    >
      <h3 className="text-sm font-medium text-slate-600">{title}</h3>
      <p className="text-xl font-bold text-slate-900 mt-1">
        {required.toLocaleString('fi-FI')} Avios
      </p>
      <p className={`mt-2 text-sm font-semibold ${covered ? 'text-green-700' : 'text-slate-500'}`}>
        {covered ? '✓ Riittää' : '✗ Ei riitä'}
      </p>
      <p className="text-sm text-slate-500 mt-1">
        {difference >= 0
          ? `Jää yli ${difference.toLocaleString('fi-FI')} Avios`
          : `Puuttuu ${Math.abs(difference).toLocaleString('fi-FI')} Avios`}
      </p>
    </div>
  );
}
