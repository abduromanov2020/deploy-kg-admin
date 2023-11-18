import React from 'react';

import { CardComponent } from '@/components/card';

export const ListModul = () => {
  const data = [
    {
      title: 'Modul 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, eget ultricies nisl ultricies. Sed vitae nisl eget nunc aliquam ultrices. Sed vitae nisl eget nunc aliquam ultrices.',
      img: '/images/new-tab.png',
      slug: [
        {
          slug: 'Pertemuan 1',
        },
      ],
    },
    {
      title: 'Modul 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, eget ultricies nisl ultricies. Sed vitae nisl eget nunc aliquam ultrices. Sed vitae nisl eget nunc aliquam ultrices.',
      img: '/images/new-tab.png',
      slug: [
        {
          slug: 'Pertemuan 1',
        },
      ],
    },
  ];
  return (
    <div className='grid grid-cols-3 flex gap-5'>
      {data.map((item, index) => {
        return (
          <CardComponent
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            slug={item.slug}
          />
        );
      })}
    </div>
  );
};
