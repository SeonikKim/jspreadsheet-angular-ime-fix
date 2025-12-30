export function installImeGuards(root: HTMLElement, sheet: any) {
  let composing = false;

  root.addEventListener('compositionstart', () => composing = true, true);
  root.addEventListener('compositionend', () => composing = false, true);

  root.addEventListener('keydown', (e: KeyboardEvent) => {
    const key = e.key;
    const isNav = key === 'Enter' || key === 'Tab' || key.startsWith('Arrow');
    if (!isNav) return;
    if (composing || (e as any).keyCode === 229) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}
