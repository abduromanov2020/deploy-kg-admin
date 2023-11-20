import { Check, ChevronsUpDown } from 'lucide-react';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
type CardComponentProps = {
  defaultValue?: string;
  optionValue?: string;
  optionLabel?: string;
  option?: string;
};
const InputSubject: React.FC<CardComponentProps> = ({
  defaultValue,
  optionLabel,
  optionValue,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const optionData = [
    {
      value: `${optionValue}`,
      label: `${optionLabel}`,
    },
  ];
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='w-full justify-between'
          >
            {value
              ? optionData.find((option) => option.value === value)?.label
              : defaultValue}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search Item...' />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {optionData.map((optionItem) => (
                <CommandItem
                  key={optionItem.value}
                  value={optionItem.value}
                  onSelect={(currentValue: string) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === optionValue ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {optionLabel}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default InputSubject;
