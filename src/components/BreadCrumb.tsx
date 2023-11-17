import Link from 'next/link';
import { FC, Fragment, ReactElement } from 'react';
// import { TBreadCrumbProps } from './types';
import { MdChevronRight } from 'react-icons/md';

import { cn } from '@/lib/utils';

export type TCrumbItem = {
  link: string;
  name: string;
};

export type TBreadCrumbProps = {
  textColor?: string;
  bgColor?: string;
  style?: React.CSSProperties;
  items: TCrumbItem[];
  className?: string;
};

export const BreadCrumb: FC<TBreadCrumbProps> = ({
  items,
  textColor = 'text-[#106FA4]',
  bgColor = 'bg-light',
  style,
  className,
}): ReactElement => {
  return (
    <div
      className={cn(
        `px-8 md:px-14 lg:px-6  place-content-start w-full text-xs md:text-sm py-4 !font-extrabold  ${bgColor}`,
        className,
      )}
      aria-label='Breadcrumb'
      style={style}
    >
      <div className='max-w-[1440px] mx-auto grid'>
        <ol className='flex w-full items-center gap-x-2 flex-wrap'>
          {items.map((crumb, index) => {
            const isLastItem = index === items.length - 1;
            if (!isLastItem) {
              return (
                <Fragment key={index}>
                  <Link
                    href={crumb.link}
                    key={index}
                    className={`inline-flex  font-[600] items-center ${textColor}`}
                    scroll={true}
                  >
                    {crumb.name}
                  </Link>
                  <MdChevronRight className={`text-xl ${textColor}`} />
                </Fragment>
              );
            } else {
              return (
                <Link key={index} href={crumb.link}>
                  <span className='text-neutral-500 font-[600] cursor-pointer'>
                    {crumb.name}
                  </span>
                </Link>
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
};
