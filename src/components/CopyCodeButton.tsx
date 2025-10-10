"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CopyCodeButtonProps {
	code: string;
	copyText: string;
	toastMessages: {
		codeCopied: string;
		codeCopiedDescription: string;
		copyError: string;
		copyErrorDescription: string;
	};
}

export default function CopyCodeButton({
	code,
	copyText,
	toastMessages,
}: CopyCodeButtonProps) {
	const { toast } = useToast();

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(code);
			toast({
				title: toastMessages.codeCopied,
				description: toastMessages.codeCopiedDescription,
			});
		} catch (err) {
			toast({
				title: toastMessages.copyError,
				description: toastMessages.copyErrorDescription,
				variant: "destructive",
			});
		}
	};

	return (
		<Button
			size="sm"
			variant="outline"
			onClick={copyToClipboard}
			className="flex items-center space-x-1"
		>
			<Copy className="h-4 w-4" />
			<span>{copyText}</span>
		</Button>
	);
}
