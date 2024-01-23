'use client';

import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { useEnableSubject } from '@/hooks/rencana-studi/subjects/hook';

import { Switch } from '@/components/ui/switch';

interface SwitchFormProps {
  id: string;
  isAvailable: boolean;
  className: string;
}

export function SwitchForm({ id, isAvailable, className }: SwitchFormProps) {
  const queryClient = useQueryClient();

  const { mutate: updateSwitch } = useEnableSubject(id);

  const handleUpdateSwitch = async () => {
    await updateSwitch(id, {
      onSuccess: () => {
        toast.success('Mata Kuliah Berhasil Diupdate');
        queryClient.invalidateQueries(['subject-get-by-major-id'] as any);
      },
    });
  };

  return (
    <Switch
      className={className}
      checked={isAvailable} // Gunakan nilai dari isAvailable untuk menentukan apakah switch dalam keadaan aktif atau tidak
      onCheckedChange={(isChecked) => {
        if (isChecked !== isAvailable) {
          handleUpdateSwitch();
        }
      }}
    />
  );
}
