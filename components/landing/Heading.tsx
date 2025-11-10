const Heading = ({
  heading,
  subheading,
  light,
}: {
  heading: string;
  subheading: string;
  light?: boolean;
}) => {
  return (
    <div className="relative mb-10">
      <div
        className={`w-[1.5px] h-full absolute top-0 left-0 rounded-full ${
          light === true ? "bg-indigo-50" : "bg-indigo-950 dark:bg-indigo-50 "
        }`}
      />
      <div className="pl-4">
        <h2
          className={`text-4xl font-bold ${
            light === true
              ? "text-indigo-50"
              : "text-indigo-950 dark:text-indigo-50"
          }`}
        >
          {heading}
        </h2>
        <p
          className={`max-w-md text-sm pt-1 ${
            light === true
              ? "text-indigo-200"
              : "text-indigo-950/70 dark:text-indigo-200/80"
          }`}
        >
          {subheading}
        </p>
      </div>
    </div>
  );
};

export default Heading;
