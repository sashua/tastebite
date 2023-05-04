import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { IconType } from 'react-icons';

type InputVariant = 'underlined' | 'flat';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  variant?: InputVariant;
  icon?: IconType;
  iconClass?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    variant = 'underlined',
    icon: Icon,
    iconClass,
    type = 'text',
    ...props
  },
  ref
) {
  const classes = getClasses({ variant, className, iconClass });

  return (
    <label className={classes.root}>
      <input className={classes.input} type={type} {...props} ref={ref} />
      {Icon && <Icon className={classes.icon} />}
    </label>
  );
});

function getClasses({
  variant,
  className,
  iconClass,
}: Pick<InputProps, 'className' | 'variant' | 'iconClass'>) {
  return {
    root: clsx('relative block', className),
    input: clsx(
      'peer w-full outline-none transition-shadow placeholder:font-thin placeholder:text-neutral-400',
      {
        'px-8 py-2 shadow-[inset_0_-1px_0_theme(colors.current)] focus:shadow-[inset_0_-2px_0_theme(colors.current)] md:py-3':
          variant === 'underlined',
        'rounded bg-white px-10 py-3 shadow-sm ring-2 ring-inset ring-transparent transition-shadow focus:ring-accent/50 md:py-4 md:rounded-lg md:text-lg':
          variant === 'flat',
      }
    ),
    icon: clsx(
      'absolute top-1/2 -translate-y-1/2 h-5 w-5',
      {
        'left-0': variant === 'underlined',
        'left-2.5 top-1/2 transition-colors peer-placeholder-shown:text-neutral-400 md:h-6 md:w-6':
          variant === 'flat',
      },
      iconClass
    ),
  };
}
