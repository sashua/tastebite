import clsx from 'clsx';
import { RiAtLine } from 'react-icons/ri';
import { Button } from './Button';
import { Input } from './Input';

interface SubscribeProps {
  className?: string;
}

export function Subscribe({ className }: SubscribeProps): JSX.Element {
  const classes = {
    root: clsx(
      'rounded-xl bg-accent-200 px-8 py-12 text-center shadow-md',
      className
    ),
  };

  return (
    <div className={classes.root}>
      <h2 className="mb-2 font-secondary text-4xl font-bold">
        Deliciousness to your inbox
      </h2>
      <p className="mb-4 font-light">
        Enjoy weekly hand picked recipes and recommendations
      </p>
      <form className="mb-4">
        <Input
          className="mb-3 w-full"
          icon={RiAtLine}
          placeholder="Email Address"
        />
        <Button className="w-full uppercase" variant="accent">
          Join
        </Button>
      </form>
      <p className="text-xs">
        By joining our newsletter you agree to our
        <span className="block cursor-pointer underline decoration-accent underline-offset-2 transition-colors hover:text-accent">
          Terms and Conditions
        </span>
      </p>
    </div>
  );
}
