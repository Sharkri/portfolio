function TechnologyItem({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="inline-flex flex-col items-center gap-2">
      <img src={logo} alt={`${name} logo`} className="w-[50px] h-[50px]" />
      <p className="text-sm">{name}</p>
    </div>
  );
}

export default TechnologyItem;
