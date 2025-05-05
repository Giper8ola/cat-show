'use client';
import { useEffect, useRef, useState } from 'react';

import styles from '@/assets/styles/ClientApp.module.scss';
import CatViewer from '@/components/CatViewer';
import Settings from '@/components/Settings';
import { API_URL } from '@/consts';
import { ClientAppProps } from '@/types';

export default function ClientApp({ initialUrl }: ClientAppProps) {
	const [enabled, setEnabled] = useState<boolean>(true);
	const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
	const [imageUrl, setImageUrl] = useState<string>(initialUrl);
	const intervalRef = useRef<number | null>(null);

	const fetchCat = async (): Promise<void> => {
		try {
			const res = await fetch(API_URL);
			const data: Array<{ url: string }> = await res.json();
			if (data[0]?.url) setImageUrl(data[0].url);
		} catch (err) {
			console.error('Fetch error:', err);
		}
	};

	useEffect(() => {
		if (enabled && autoRefresh) {
			fetchCat();
			intervalRef.current = window.setInterval(fetchCat, 5000);
		} else if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [enabled, autoRefresh]);

	return (
		<div className={styles.container}>
			<div className={styles.container_inner}>
				<Settings
					enabled={enabled}
					autoRefresh={autoRefresh}
					onToggleEnabled={() => setEnabled((e) => !e)}
					onToggleAuto={() => setAutoRefresh((a) => !a)}
					onFetch={fetchCat}
				/>
				<CatViewer url={imageUrl} />
			</div>
		</div>
	);
}
