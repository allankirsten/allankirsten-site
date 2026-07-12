/** Splits text into .reveal-word spans for the Reveal stagger-in title animation. */
export function revealWords(text: string, keyPrefix = "") {
  const words = text.split(" ");
  return words.map((w, i) => (
    <span
      key={`${keyPrefix}${i}`}
      className="reveal-word"
      style={{ display: "inline-block", marginRight: i < words.length - 1 ? "0.28em" : 0 }}
    >
      {w}
    </span>
  ));
}
