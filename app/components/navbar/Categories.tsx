'use client';

import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { MdOutlineVilla } from 'react-icons/md';
import { FaSkiing } from 'react-icons/fa';
import CategoryBox from './CategoryBox';
import { BsSnow } from 'react-icons/bs';
import Container from '../Container';
import { IoDiamond } from 'react-icons/io5';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill, 
    description: 'This property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is the countryside!',
  },
  {
    label: 'Pool',
    icon: TbPool,
    description: 'This property has a pool!',
  },
  {
    label: 'Island',
    icon: GiIsland,
    description: 'This property is on an Island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is in a castle!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping activities!',
  },
  {
    label: 'Artic',
    icon: BsSnow,
    description: 'This property is in the artic!',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property is in a cave!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in the barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is luxurious!',
  },
]

export default function Categories() {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const mainPage = pathname === '/';

  if(!mainPage) {
    return null;
  }

  return (
    <Container>
      <div className="
        pt-4
        flex
        items-center
        justify-between
        overflow-x-auto
      ">
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            icon={item.icon}
            label={item.label}
            selected={item.label === category}
          />
        ))}
      </div>
    </Container>
  );
}
