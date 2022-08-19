import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';

interface NavLinkProps {
  href: string;
  exact: boolean;
  children: ReactNode;
}

export default function NavLink({
  href,
  exact,
  children,
  ...props
}: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const newIsActive = exact ? pathname === href : pathname.startsWith(href);
    setIsActive(newIsActive);
  }, [exact, href, pathname]);

  return (
    <Link href={href}>
      <a
        style={isActive ? { color: '#e5b268' } : { color: '#c1c1c1' }}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}
