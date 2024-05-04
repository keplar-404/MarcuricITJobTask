const formatDate = (date: Date): string => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
  
    return `${dd}/${mm}/${yyyy}`;
  };
  
  const getDateRange = (startDate: Date, endDate: Date): string => {
    const startDateFormatted = formatDate(startDate);
    const endDateFormatted = formatDate(endDate);
  
    return `${startDateFormatted} - ${endDateFormatted}`;
  };
  
  export const getCurrentDate = (): string => {
    const today = new Date();
    return getDateRange(today, today);
  };
  
  export const getYesterdayDate = (): string => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return getDateRange(yesterday, today);
  };
  
  export const getLastSevenDays = (): string => {
    const today = new Date();
    const endDate = formatDate(today);
    const startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return getDateRange(startDate, today);
  };
  
  export const getLastThirtyDays = (): string => {
    const today = new Date();
    const endDate = formatDate(today);
    const startDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    return getDateRange(startDate, today);
  };
  
  export const getCurrentMonth = (): string => {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    return getDateRange(startDate, today);
  };
  
  export const getLastMonth = (): string => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    return getDateRange(firstDayOfMonth, lastDayOfMonth);
  };
  
  export const getCurrentYear = (): string => {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), 0, 1);
    return getDateRange(startDate, today);
  };
  
  export const getLastYear = (): string => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear() - 1, 0, 1);
    const lastDayOfYear = new Date(today.getFullYear() - 1, 11, 31);
    return getDateRange(firstDayOfYear, lastDayOfYear);
  };
  




  
  export const formatDateArrayToRanges = (dateArray: Date[]): string[] => {
    const dateRanges: string[] = [];
  
    for (let i = 0; i < dateArray.length - 1; i++) {
      const startDate = dateArray[i];
      const endDate = dateArray[i + 1];
      const dateRange = getDateRange(startDate, endDate);
      dateRanges.push(dateRange);
    }
  
    return dateRanges;
  };