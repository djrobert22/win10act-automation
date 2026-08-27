// build 5bd9010920
// (auto) 4694d3
import { useState } from 'react';
export default function useCounter(init = 0) {
  const [n, setN] = useState(init);
  return { n, inc: () => setN((x) => x + 1), dec: () => setN((x) => x - 1) };
}
