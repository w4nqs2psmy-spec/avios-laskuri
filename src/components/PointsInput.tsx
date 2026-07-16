type PointsInputProps = {
  value: number;
  onChange: (value: number) => void;
};

const MAX_POINTS = 300000;

export function PointsInput({ value, onChange }: PointsInputProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      <label htmlFor="mr-points" className="block text-sm font-medium text-slate-600 mb-2">
        Membership Rewards -pisteet
      </label>
      <input
        id="mr-points"
        type="number"
        min={0}
        max={MAX_POINTS}
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-lg font-semibold text-slate-900 mb-3"
      />
      <input
        type="range"
        min={0}
        max={MAX_POINTS}
        step={1000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
      <p className="text-sm text-slate-500 mt-2">
        {value.toLocaleString('fi-FI')} MR-pistettä
      </p>
    </div>
  );
}
