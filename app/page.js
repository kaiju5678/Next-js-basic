"use client"

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setData(data.fact));
  }, []);
  console.log("-data-", data);
  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>กำลังโหลด...</p>}
    </div>
  );
}
