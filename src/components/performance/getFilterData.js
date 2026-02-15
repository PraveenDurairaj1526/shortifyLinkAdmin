const toDate = (ts) => (ts?.toDate ? ts.toDate() : new Date(ts));

export const getFilterData = (data = [], days = 7) => {
  const now = new Date();
  const pastDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

  const grouped = {};

  data.forEach((item) => {
    const dateObj = toDate(item?.createAt);
    if (dateObj < pastDate) return;

    const dateKey = dateObj.toISOString().split("T")[0];

    if (!grouped[dateKey]) {
      grouped[dateKey] = {
        count: 0,
        shortLink: 0,
      };
    }

    grouped[dateKey].count += item?.clickCount || 0;
    grouped[dateKey].shortLink += 1;
  });

  return Object.entries(grouped).map(([date, value]) => ({
    date,
    ...value,
  }));
};
