import { cn } from '@/lib/utils';
import React from 'react'

const BodyHeader = ({className, children}:{className?: string, children:React.ReactNode}) => {
  return (
    <section className="main_container py-4">
        <div className={cn("sub_container flex items-center justify-between", className)}>
            {children}
        </div>
    </section>
  )
}

export default BodyHeader;