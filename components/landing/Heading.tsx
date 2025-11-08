const Heading = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <div className="relative">
      <div className="bg-neutral-800 dark:bg-neutral-200 w-px h-full absolute top-0 left-0 rounded-xs" />
      <div className="pl-4">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <p className="max-w-lg text-sm pt-1">{subheading}</p>
      </div>
    </div>
  );
};

export default Heading;
