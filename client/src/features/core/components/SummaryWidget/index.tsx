type Props = {
  title: string;
  summary: string | number;
};

export default function SummaryWidget({ title, summary }: Props) {
  return (
    <div className="SummaryWidget-wrapper">
      <p className="SummaryWidget-title">{title}</p>
      <h1 className="SummaryWidget-summary">{summary}</h1>
    </div>
  );
}
