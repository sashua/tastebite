import { RiAtFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { Logo } from '~/common/components';

const socialLinks = [
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/sashua/',
    icon: RiLinkedinBoxFill,
  },
  {
    label: 'Github',
    href: 'https://github.com/sashua/tastebite',
    icon: RiGithubFill,
  },
  {
    label: 'Email',
    href: 'mailto:sereda.san@gmail.com',
    icon: RiAtFill,
  },
];

export function Footer(): JSX.Element {
  return (
    <footer className="bg-neutral-100 pt-8">
      <div className="container">
        <Logo className="mb-4" />
        <p className="mb-4 max-w-sm text-xs font-light text-neutral-700">
          Our recipe website believes that cooking is not just about feeding
          your body, but also nourishing your soul. Discover the joy of creating
          delicious and nutritious meals from scratch with our curated
          collection of recipes.
        </p>
        <div className="mb-4 flex items-center justify-center gap-6 text-neutral-700">
          {socialLinks.map(({ label, href, icon: Icon }, i) => (
            <a
              key={i}
              className="inline-block rounded-full p-2 transition-colors hover:text-accent-400"
              href={href}
              target="_blank"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="border-t py-4 text-center text-xs text-neutral-700">
          © 2023 Tastebite - All rights reserved
        </p>
      </div>
    </footer>
  );
}
