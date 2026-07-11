import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders a markdown string with GitHub-flavored extensions (tables, etc.)
 * inside the .prose-ak style scope. Server component: no client JS shipped.
 */
export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-ak">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
