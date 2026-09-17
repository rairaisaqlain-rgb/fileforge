export function planConvert(filename, target) {
  const ext = filename.split('.').pop().toLowerCase();
  return `Plan: ${ext} → ${target}. Wire pdf-lib / canvas in next sprint.`;
}
