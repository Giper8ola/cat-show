import { API_URL } from '@/consts';

import ClientApp from '../components/ClientApp';

async function getCatUrl(): Promise<string> {
	const res = await fetch(API_URL);
	const data: Array<{ url: string }> = await res.json();
	return data[0]?.url || '';
}

export default async function Page() {
	const initialUrl = await getCatUrl();
	return <ClientApp initialUrl={initialUrl} />;
}
