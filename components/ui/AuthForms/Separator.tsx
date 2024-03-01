interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function Separator({ text, ...props }: SeparatorProps) {
  return (
    <div className="relative" {...props}>
      <div className="relative flex items-center py-1">
        <div className="grow border-t border-primary"></div>
        {text === '' ? null : <span className="mx-4 shrink text-sm leading-8">{text}</span>}
        <div className="grow border-t border-primary"></div>
      </div>
    </div>
  );
}
