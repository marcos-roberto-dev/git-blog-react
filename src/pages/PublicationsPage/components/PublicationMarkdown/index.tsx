/* eslint-disable react/no-children-prop */
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import gfm from 'remark-gfm'
import { PublicationContentContainer } from './styles'

interface PublicationMarkdownProps {
  content: string
}

export function PublicationMarkdown({ content }: PublicationMarkdownProps) {
  return (
    <PublicationContentContainer>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, gfm]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                style={dracula}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          },
        }}
        children={content}
      />
    </PublicationContentContainer>
  )
}
