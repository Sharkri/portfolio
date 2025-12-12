function TechnologyItem({ logo, name }: { logo: string; name: string }) {
  return (
    <img
      src={logo}
      alt={name}
      title={name}
      className="m-auto object-cover duration-500 hover:translate-y-[-2px] max-h-9 w-9 max-sm:max-h-8 max-sm:w-8"
    />
  );
}

export default TechnologyItem;
