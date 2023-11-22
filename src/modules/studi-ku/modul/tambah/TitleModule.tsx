import React from 'react';

export const TitleModule = ({ title }: { title: string }) => {
  return (
    <div className='flex justify-between w-full  border-b border-slate-200 p-4 items-center'>
      <p className='text-dark-900 font-semibold '>{title}</p>
    </div>
  );
};

export const SubTitleModule = ({ title }: { title: string }) => {
  return <h3 className='font-semibold text-xl mb-4 text-dark-900'>{title}</h3>;
};
