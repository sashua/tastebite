import { RiLock2Line, RiMailOpenLine, RiUser3Line } from 'react-icons/ri';
import { Avatar, Button, Input } from '~/components';

export default function ProfilePage(): JSX.Element {
  const name = 'John Doe';

  return (
    <section className="section">
      <div className="container">
        <h1 className="title-page">Profile</h1>
        <form>
          <div className="mb-10 flex items-center gap-4">
            <Avatar className="shrink-0" size="lg" name={name} />
            <Button variant="solid" size="sm">
              Change
            </Button>
            <Button variant="bordered" size="sm">
              Delete
            </Button>
          </div>
          <div className="mb-10 grid grid-cols-1 gap-8">
            <Input
              icon={RiUser3Line}
              name="name"
              placeholder="Full name"
              aria-label="Full name"
            />
            <Input
              icon={RiMailOpenLine}
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
            />
            <div>
              <Input
                icon={RiLock2Line}
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
              />
              <div className="text-right">
                <Button variant="flat" size="xs">
                  Change
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button className="uppercase" variant="solid" size="md">
              Save profile
            </Button>
          </div>
        </form>

        <div className="mt-16 flex justify-between border-t pt-6">
          <Button variant="flat" size="xs">
            Sign out
          </Button>
          <Button variant="flat" size="xs">
            Delete account
          </Button>
        </div>
      </div>
    </section>
  );
}
