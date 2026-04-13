import React from 'react';
import { Tooltip } from 'react-tooltip';
import { CopyClip } from '@/components/CopyClip';

interface CopyTooltipProps {
  id: string;
  copyValue: string;
  children: React.ReactNode;
}

export function CopyTooltip({ id, copyValue, children }: CopyTooltipProps) {
  return (
    <>
      <span data-tooltip-id={id}>{children}</span>
      <Tooltip id={id} clickable>
        <CopyClip value={copyValue} />
      </Tooltip>
    </>
  );
}
