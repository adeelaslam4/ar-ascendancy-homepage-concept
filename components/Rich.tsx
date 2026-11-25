/** Renders the client's own emphasis: text between ** … ** is set semibold. */
export default function Rich({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold">
            {p}
          </strong>
        ) : (
          p
        ),
      )}
    </>
  );
}
