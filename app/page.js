"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Button() {
  const router = useRouter();
  return (

    <div style={{ backgroundColor: '#fffafa' }}>
      <div style={{ color: '#318d51' }}>
        Text
      </div>
    </div>
  );
}
