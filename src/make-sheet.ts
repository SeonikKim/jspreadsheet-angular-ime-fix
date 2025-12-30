import jspreadsheet from 'jspreadsheet-ce';
import 'jspreadsheet-ce/dist/jspreadsheet.css';

export function createDemoSheet(root: HTMLElement, prefix: string) {
  const columns = [
    { title: prefix + ' 텍스트', type: 'text', width: 200 },
    { title: prefix + ' 숫자', type: 'numeric', decimal: '.', width: 120 }
  ];

  const data = Array.from({ length: 10 }).map((_, i) => ['행 ' + (i + 1), i + 1]);

  const instance = jspreadsheet(root, {
    worksheets: [{ data, columns }],
    tableOverflow: true,
    tableHeight: '400px'
  });

  const sheet = Array.isArray(instance) ? instance[0] : instance;
  return { sheet };
}
