import { ReactNativeFile } from "apollo-upload-client";

export function generateRNFile(uri: string | null, name: string) {
	return uri
		? new ReactNativeFile({
				uri,
				type: "image/jpeg",
				name,
		  })
		: null;
}
