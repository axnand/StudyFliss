import { ReactNode } from 'react';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export default function Card_({ title, description, footer, children }: Props) {
  return (
    <div className="w-full border-2  rounded-xl p border-primary/10 hover:border-primary/30 shadow-[0_15px_40px_-15px_var(--primary)] shadow-primary/10 hover:shadow-primary/30 bg-background transition-all duration-500 ease-in-out-sine">
      <div className="px-10 py-8">
        <h3 className="mb-1 text-2xl font-extrabold font-heading hover:text-primary transition-all duration-200 hover:mt-2 ease-in-out-sine text-center">{title}</h3>
        <p className="text-foreground/90">{description}</p>
        {children}
      </div>
      {footer && (
        <div className="p-4 border-t rounded-b-md border-primary bg-background text-foreground/80">
          {footer}
        </div>
      )}
    </div>
  );
}
