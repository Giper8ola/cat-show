export interface ClientAppProps {
	initialUrl: string;
}

export interface SettingsProps {
	enabled: boolean;
	autoRefresh: boolean;
	onToggleEnabled: () => void;
	onToggleAuto: () => void;
	onFetch: () => void;
}
