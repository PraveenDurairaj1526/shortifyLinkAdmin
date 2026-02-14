// Convert Firestore timestamp → JS Date
const toDate = (ts) => (ts?.toDate ? ts.toDate() : new Date(ts));

// Generic function
export const getDataByDays = (data = [], days = 1, sumClicks = false) => {
  const now = new Date();
  const pastDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

  const filtered = data.filter(item => {
    const date = toDate(item?.createAt);
    return date >= pastDate;
  });

  return sumClicks
    ? filtered.reduce((acc, val) => acc + (val?.clickCount || 0), 0)
    : filtered.length;
};
