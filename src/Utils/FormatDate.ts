export const formatDate = (writeDate: string): string => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const dateObj = new Date(writeDate);

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');

  if (year === currentYear) {
    return `${month}.${day}`;
  } else {
    return `${year}.${month}.${day}`;
  }
};

export const formatDateTime = (writeDate: string): string => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const dateObj = new Date(writeDate);

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const hour = String(dateObj.getHours()).padStart(2, '0');
  const minute = String(dateObj.getMinutes()).padStart(2, '0');

  if (year === currentYear) {
    return `${month}.${day} ${hour}:${minute}`;
  } else {
    return `${year}.${month}.${day} ${hour}:${minute}`;
  }
};
