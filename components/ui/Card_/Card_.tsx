import { ReactNode } from 'react';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export default function Card_({ title, description, footer, children }: Props) {
  return (
    <div className="w-full border-2 rounded-xl border-primary/10 hover:border-primary/30 shadow-[0_15px_40px_-15px_var(--primary)] shadow-primary/10 hover:shadow-primary/30 transition-all duration-500 ease-in-out-sine">
      <div className="lg:px-10 px-6 lg:py-8 py-4">
        <h3 className="mb-1 text-2xl font-extrabold hover:text-primary transition-all duration-200 hover:mt-2 ease-in-out-sine text-center">{title}</h3>
        <p className="text-foreground/90">{description}</p>
        {children}
      </div>
      {footer && (
        <div className="p-4 rounded-b-md border-primary text-foreground/80">
          {footer}
        </div>
      )}
    </div>
  );
}
