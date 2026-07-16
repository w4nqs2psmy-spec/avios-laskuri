import { destinations } from '../data/destinations';

type DestinationSelectProps = {
  value: string;
  onChange: (code: string) => void;
};

export function DestinationSelect({ value, onChange }: DestinationSelectProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      <label htmlFor="destination" className="block text-sm font-medium text-slate-600 mb-2">
        Kohde
      </label>
      <select
        id="destination"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-lg font-semibold text-slate-900"
      >
        {destinations.map((d) => (
          <option key={d.code} value={d.code}>
            {d.name} — {d.economyAviosOneWay.toLocaleString('fi-FI')} Avios/suunta
          </option>
        ))}
      </select>
    </div>
  );
}
