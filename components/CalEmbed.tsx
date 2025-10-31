interface CalEmbedProps {
  calLink: string;
}

export default function CalEmbed({ calLink }: CalEmbedProps) {
  return (
    <iframe
      src={`https://cal.com/${calLink}`}
      width="100%"
      height="700"
      className="rounded-lg"
    />
  );
}
