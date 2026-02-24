const WORDS_PER_MINUTE = 200;

function countWords(text: string): number {
  if (!text || typeof text !== "string") return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

interface ReadTimeProps {
  /** Number of words in the content (takes precedence over content) */
  wordCount?: number;
  /** Full content string; word count is calculated from this if wordCount is not provided */
  content?: string;
  /** Reading speed in words per minute (default: 200) */
  wordsPerMinute?: number;
}

export default function ReadTime({
  wordCount: wordCountProp,
  content,
  wordsPerMinute = WORDS_PER_MINUTE,
}: ReadTimeProps) {
  const wordCount =
    wordCountProp ?? (content ? countWords(content) : 0);
  if (wordCount <= 0) return null;

  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  const label = minutes === 1 ? "1 min read" : `${minutes} min read`;

  return (
    <span
      className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400"
      aria-label={label}
    >
      <svg
        className="w-4 h-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{label}</span>
    </span>
  );
}
