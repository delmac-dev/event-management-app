"use client";

import { NavigationProps } from '@/lib/types';
import { cn, parseNavigation } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const BodyNavigation = ({navigationList}:{navigationList: NavigationProps[]}) => {
  const [content, setContent] = useState<NavigationProps[] | null>(null);
  const pathname = usePathname();

  useEffect(()=> {
    setContent(parseNavigation(pathname, navigationList));
}, [pathname]);

  return (
    <section className="main_container bg-muted/30 border-b">
        <div className={cn("sub_container flex")}>
          <ul className="flex-1 flex items-center justify-center gap-4">
            {content?.map(({ name, link, active }, _id) => (
              <li key={_id} className='py-1.5'>
                <Link 
                  href={link}
                  className={cn("block px-3 py-2 text-xs font-normal tracking-wide capitalize rounded-sm text-secondary-foreground transition-colors", 
                    active ? "bg-secondary" : "hover:bg-secondary")}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </section>
  )
}

export default BodyNavigation;