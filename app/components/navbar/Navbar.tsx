'use client';

import { SafeUser } from '@/app/types';
import Categories from './Categories';
import Container from '../Container';
import UserMenu from './UserMenu';
import Search from './Search';
import Logo from './Logo';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export default function Navbar({ currentUser } : NavbarProps) {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="
      py-4
      border-b-[1px]
      ">
        <Container>
          <div className="
            flex
            items-center
            justify-between
            gap-3
            md:gap-0
          ">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}
