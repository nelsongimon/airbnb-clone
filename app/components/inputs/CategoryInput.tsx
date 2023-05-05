'use client';

import { IconType } from "react-icons";

interface CategoryBoxProps {
  onClick: (value: string) => void; 
  label: string;
  icon: IconType;
  selected?: boolean;
}
export default function CategoryInput({ onClick, label, icon: Icon, selected }: CategoryBoxProps) {
  return (
    <div
      onClick={() => onClick(label)}  
      className={`
         rounded-xl
         border-2
         p-4
         flex
         flex-col
         gap-3
         hover:border-black
         transition
         cursor-pointer
         ${selected ? 'border-black' : 'border-l-neutral-200'}
      `}
    >
      <Icon size={30}/>
      <div className="font-semibold">
        {label}
      </div>
    </div>
  );
}
