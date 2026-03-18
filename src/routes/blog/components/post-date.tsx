export default function PostDate({ date }: { date: string | Date }) {
  const newDate = new Date(date);

  return (
    <span title={newDate.toLocaleString()} className="text-sm">
      {newDate.toLocaleDateString()}
    </span>
  );
}
