"use client"
import { useRouter } from 'next/navigation';
import { Alert } from 'reactstrap';

export default function Button() {
  const router = useRouter();
  return (

    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      minHeight: '100vh',
      backgroundColor: '#fffafa',
      flexDirection: 'column',
    }}>
      <Alert color="primary">Danger</Alert>
      <button onClick={() => router.push('/another-page')}>Go to Another Page</button>
      <div style={{
        color: '#318d51',
        fontWeight: 700,
      }}>
        Text
      </div>
      <div className="text-3xl p-3 bg-red-500 rounded-[50px] text-yellow-500">
        Hello Tailwind CSS
      </div>
    </div>
  );
}
