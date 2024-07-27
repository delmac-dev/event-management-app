import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
  level?: 'L' | 'M' | 'Q' | 'H';
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  value,
  size = 128,
  fgColor = "#000000",
  level = "L",
}) => {
  return (
    <QRCodeSVG
        fill='currentColor'
        value={value}
        includeMargin={false}
        size={size}
        fgColor={fgColor}
        level={level}
    />
  );
};

export default QRCodeGenerator;
