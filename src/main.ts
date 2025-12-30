import { createDemoSheet } from './make-sheet';
import { installImeGuards } from './ime-guards';
import './styles.css';

const basicRoot = document.getElementById('sheet-basic')!;
const guardRoot = document.getElementById('sheet-guard')!;

createDemoSheet(basicRoot, '기본');
const { sheet } = createDemoSheet(guardRoot, '가드');
installImeGuards(guardRoot, sheet);
