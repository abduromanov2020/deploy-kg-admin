import React from 'react';
import Avatar from 'react-avatar';

import { Badge } from '@/components/ui/badge';

export const AdminCard = () => {
  return (
    <div className='flex justify-between mb-5'>
      <div className='flex gap-2'>
        <Avatar
          name='Admin'
          color='#F26800'
          className='rounded-full'
          size='35'
        />
        <div className='flex flex-col justify-between'>
          <p className='text-sm'>Admin 123</p>
          <p className='text-[10px]'>admin1@gmail.com</p>
        </div>
      </div>
      <div>
        <Badge className='text-[10px] bg-green-100 text-green-800 hover:bg-green-200'>
          Online
        </Badge>
      </div>
    </div>
  );
};
