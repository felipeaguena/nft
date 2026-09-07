const fs = require('fs');

const lines = fs.readFileSync('src/components/pagesComponents/SobreClient.tsx', 'utf-8').split('\n');

const imports = `import {
  Globe2,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  Truck,
  Landmark,
  Layers,
  HeartPulse,
  Compass,
  Cpu,
  Palette,
  Briefcase,
  ChevronRight,
  CalendarCheck,
  Building,
  Plane,
  Anchor,
  Warehouse,
} from 'lucide-react';

import { LanguageCode } from '@/src/types';

`;

// Find where "const content = {" starts and where it ends before "const t = content"
let startIdx = -1;
let endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const content = {') && startIdx === -1) {
    startIdx = i;
  }
  if (lines[i].includes('const t = content') && startIdx !== -1) {
    // The previous line or a few lines before it ends the object
    endIdx = i;
    break;
  }
}

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find start or end index!");
  process.exit(1);
}

// Find the last closing brace before `const t =`
while (!lines[endIdx-1].includes('};') && endIdx > startIdx) {
  endIdx--;
}

const contentLines = lines.slice(startIdx, endIdx);
contentLines[0] = contentLines[0].replace('const content = {', 'export const CONTENT: any = {');

fs.writeFileSync('src/data/sobre.ts', imports + contentLines.join('\n'), 'utf-8');
