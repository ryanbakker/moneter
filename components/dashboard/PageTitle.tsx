const PageTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};

export default PageTitle;
