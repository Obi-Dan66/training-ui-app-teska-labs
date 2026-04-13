import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

interface CopyClipProps {
  value: string;
  display?: React.ReactNode;
}

export function CopyClip({ value, display }: CopyClipProps) {
  return (
    <CopyToClipboard text={value}>
      <span style={{ cursor: 'pointer' }} className="copy-clip" title={value}>
        {display ?? value}
      </span>
    </CopyToClipboard>
  );
}
