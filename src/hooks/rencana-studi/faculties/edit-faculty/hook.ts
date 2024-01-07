import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { EditFacultyRequest } from '@/hooks/rencana-studi/faculties/edit-faculty/request';

import { TMetaErrorResponse } from '@/types';
import {
  TEditFacultyPayload,
  TResponseAllFaculties,
} from '@/types/rencana-studi/faculties/types';

export const useEditFaculty = (
  id: string,
): UseMutationResult<
  TResponseAllFaculties,
  TMetaErrorResponse,
  TEditFacultyPayload
> => {
  return useMutation({
    mutationKey: ['edit-faculty', id],
    mutationFn: async (payload) => await EditFacultyRequest(id, payload),
  });
};
