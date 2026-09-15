export default function RememberMeCheckbox({ defaultChecked = false }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-300">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-4 w-4 rounded border-white/20 bg-white/5 accent-teal-400"
      />
      Remember me
    </label>
  );
}
