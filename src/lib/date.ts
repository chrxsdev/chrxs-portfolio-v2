export const formatDate = (date: Date | string | null): string => {
  if (!date) return '';
  
  const d = new Date(date);
  d.setUTCHours(12, 0, 0, 0);
  
  return new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(d);
};
