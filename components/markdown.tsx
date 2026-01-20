import { autoAddProtocol } from "@/helpers/autoAddProtocol";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkDownProps = {
  description: string;
};

export default function MarkDown({ description }: MarkDownProps) {
  const content = autoAddProtocol(description);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl text-[#212529]" {...props} />
        ),
        p: ({ node, ...props }) => <p className="leading-relaxed" {...props} />,
        a: ({ node, ...props }) => (
          <a
            className="text-[#337ab7] no-underline hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside leading-snug" {...props} />
        ),
        li: ({ node, ...props }) => <li {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
