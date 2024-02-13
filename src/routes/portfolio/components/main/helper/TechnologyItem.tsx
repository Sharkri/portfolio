function TechnologyItem({ logo, name }: { logo: string; name: string }) {
  return (
    <img
      src={logo}
      alt={name}
      title={name}
      width={36}
      height={36}
      className="m-auto object-cover duration-500 hover:translate-y-[-2px]"
    />
  );
}

export default TechnologyItem;
