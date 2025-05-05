'use client';
import React from 'react';

import { SettingsProps } from '@/types';

import styles from '../assets/styles/Settings.module.scss';

export default function Settings({ enabled, autoRefresh, onToggleEnabled, onToggleAuto, onFetch }: SettingsProps) {
	return (
		<div className={styles.container}>
			<label className={styles.label}>
				<input type="checkbox" checked={enabled} onChange={onToggleEnabled} /> Enabled
			</label>
			<label className={styles.label}>
				<input type="checkbox" checked={autoRefresh} onChange={onToggleAuto} disabled={!enabled} /> Auto-refresh every 5 seconds
			</label>
			<button className={styles.button} onClick={onFetch} disabled={!enabled}>
				Get cat
			</button>
		</div>
	);
}
