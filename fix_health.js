const fs = require('fs');

const lines = fs.readFileSync('src/components/pagesComponents/HealthClient.tsx', 'utf-8').split('\n');

const imports = `import { LanguageCode } from '@/src/types';
import React from 'react';

`;

// Find where "const CONTENT" starts and where it ends before "export default function HealthClient"
let startIdx = -1;
let endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const CONTENT: Record<LanguageCode, ContentLocale> = {') && startIdx === -1) {
    startIdx = i;
  }
  if (lines[i].includes('export default function HealthClient') && startIdx !== -1) {
    endIdx = i;
    break;
  }
}

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find start or end index!");
  process.exit(1);
}

// Find the last closing brace before `export default function HealthClient`
while (!lines[endIdx-1].includes('};') && endIdx > startIdx) {
  endIdx--;
}

const contentLines = lines.slice(startIdx, endIdx);
contentLines[0] = contentLines[0].replace('const CONTENT: Record<LanguageCode, ContentLocale> = {', 'export const CONTENT: any = {');

fs.writeFileSync('src/data/health.tsx', imports + contentLines.join('\n'), 'utf-8');
