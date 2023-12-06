export interface ErrorServerType {
	error: ErrorType;
	refetch: () => void;
}

interface ErrorType {
	message: string;
}
