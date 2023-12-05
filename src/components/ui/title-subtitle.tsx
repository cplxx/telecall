interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
}

const TitleAndSubtitle = (props: TitleAndSubtitleProps) => {
  return (
    <div className="flex flex-col gap-4 mt-14 text-center">
      <h1 className="font-bold text-2xl ">{props.title}</h1>
      <p className="text-sm">{props.subtitle}</p>
    </div>
  );
};

export default TitleAndSubtitle;
