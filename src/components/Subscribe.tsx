import clsx from 'clsx';
import { RiMailOpenLine } from 'react-icons/ri';
import { Button } from './Button';
import { Input } from './Input';

interface SubscribeProps {
  className?: string;
}

export function Subscribe({ className }: SubscribeProps): JSX.Element {
  return (
    <div
      className={clsx(
        'rounded-xl bg-accent-200 px-8 py-12 text-center shadow-md sm:py-14 md:py-16 lg:py-20',
        className
      )}
    >
      <div className="mx-auto max-w-[530px]">
        <h2 className="mb-2 font-secondary text-4xl font-bold sm:mb-3 sm:text-5xl lg:mb-4 lg:text-6xl">
          Deliciousness to your inbox
        </h2>
        <p className="mb-4 font-light md:mb-5 md:text-lg lg:mb-6 lg:text-xl">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <form className="mb-4 md:relative lg:mb-5">
          <Input
            className="mb-3 md:mb-0"
            variant="flat"
            icon={RiMailOpenLine}
            type="email"
            name="email"
            placeholder="Email address"
            aria-label="Email address"
          />
          <Button
            className="flex w-full items-center justify-center uppercase md:absolute md:inset-y-1 md:right-1 md:w-auto md:px-8"
            variant="solid"
            size="lg"
          >
            Join
          </Button>
        </form>
        <p className="text-xs md:text-sm lg:text-base xl:text-lg">
          By joining our newsletter you agree to our
          <span className="block cursor-pointer underline decoration-accent underline-offset-2 transition-colors hover:text-accent">
            Terms and Conditions
          </span>
        </p>
      </div>
    </div>
  );
}
