const toDate = (ts) => (ts?.toDate ? ts.toDate() : new Date(ts));

export const getFilterData = (data = [], days = 7) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (days - 1)); 

  const grouped = {};

  data.forEach((item) => {
    if (!item?.createAt) return;

    const dateObj = toDate(item.createAt);
    dateObj.setHours(0, 0, 0, 0); 

    if (dateObj < startDate) return;

  const dateKey = dateObj.toLocaleDateString("en-CA");

    if (!grouped[dateKey]) {
      grouped[dateKey] = {
        count: 0,
        shortLink: 0,
      };
    }

    grouped[dateKey].count += item?.clickCount || 0;
    grouped[dateKey].shortLink += 1;
  });

  return Object.entries(grouped)
    .map(([date, value]) => ({
      date,
      ...value,
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};