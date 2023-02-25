import dynamic from 'next/dynamic';

// Lets disable SSR for GraphqlQuery part for now....
// Direct import will cause componeont to run on server first.
const CarQuery = dynamic(() => import('@/components/CarQuery'), {
  ssr: false,
});

// Moved component to CarQuery to avoid Relay forced nameing
export default function Home() {
  return <CarQuery />;
}
