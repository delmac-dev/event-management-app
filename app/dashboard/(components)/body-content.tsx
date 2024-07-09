import { cn } from '@/lib/utils';
import React from 'react'

const BodyContent = ({className, children}:{className?: string, children:React.ReactNode}) => {
  return (
    <section className="main_container py-4">
        <div className={cn("sub_container", className)}>
            {children}
        </div>
    </section>
  )
}

export default BodyContent;