const DashboardPageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-extrabold text-indigo-950 dark:text-indigo-50 text-3xl tracking-tighter">
        {title}
      </h1>
      <h2 className="font-medium text-sm text-indigo-950/60 dark:text-indigo-100/60 max-w-[340px]">
        {subtitle}
      </h2>
    </div>
  );
};

export default DashboardPageHeader;
