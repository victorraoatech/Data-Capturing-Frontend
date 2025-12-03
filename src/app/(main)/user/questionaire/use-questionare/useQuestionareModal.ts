// useQuestionnaireModal.ts
'use client';

import { useState, useCallback } from 'react';

export const useQuestionnaireModal = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const openCreate = useCallback(() => setIsCreateOpen(true), []);
  const closeCreate = useCallback(() => setIsCreateOpen(false), []);
  const openShare = useCallback(() => setIsShareOpen(true), []);
  const closeShare = useCallback(() => setIsShareOpen(false), []);
  const resetModal = useCallback(() => {
    setIsCreateOpen(false);
    setIsShareOpen(false);
  }, []);

  return {
    isCreateOpen,
    isShareOpen,
    openCreate,
    closeCreate,
    openShare,
    closeShare,
    resetModal,
  };
};