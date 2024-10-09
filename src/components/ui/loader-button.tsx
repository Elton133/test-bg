import { LoaderCircle } from 'lucide-react';
import { Button } from '@components/ui/button';

interface LoaderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

export default function LoaderButton({
  loading,
  children,
  variant = 'default',
  ...rest
}: LoaderButtonProps) {
  return (
    <Button
      variant={variant}
      className={'font-semibold flex items-center'}
      {...rest}
    >
      {loading && <LoaderCircle className={'animate-spin mr-2'} />}
      {children}
    </Button>
  );
}
