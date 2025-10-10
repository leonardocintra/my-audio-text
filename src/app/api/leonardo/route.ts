import { type NextRequest, NextResponse } from "next/server";

interface WebhookPayload {
	name: string;
	whatsapp: string;
	email: string;
}

const urlBase = "https://n8n.leonardocintra.com.br/webhook";

export async function POST(request: NextRequest) {
	try {
		// Parse do body da requisição
		const body: WebhookPayload = await request.json();

		// Validação básica dos campos obrigatórios
		if (!body.name || !body.whatsapp || !body.email) {
			return NextResponse.json(
				{ error: "Campos obrigatórios: nome, whatsapp, email" },
				{ status: 400 },
			);
		}

		// URL do webhook do n8n
		const webhookUrl = `${urlBase}/70c748e8-aa20-4d82-bb36-95f85d7fecc3`;

		// Preparar o payload para enviar ao webhook
		const payload = {
			name: body.name,
			whatsapp: body.whatsapp,
			email: body.email,
		};

		// Fazer a requisição para o webhook do n8n
		const response = await fetch(webhookUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		// Verificar se a requisição foi bem-sucedida
		if (!response.ok) {
			console.error(
				"Erro ao enviar para webhook:",
				response.status,
				response.statusText,
			);
			return NextResponse.json(
				{ error: "Erro interno do servidor" },
				{ status: 500 },
			);
		}

		const data = await response.json();
		return NextResponse.json(
			{
				instanceName: data.instanceName,
				message: "Dados enviados com sucesso",
				success: true,
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error("Erro na rota POST:", error);
		return NextResponse.json(
			{ error: "Erro interno do servidor" },
			{ status: 500 },
		);
	}
}

export async function GET(request: NextRequest) {
	try {
		// Extrair o instanceName do query param
		const { searchParams } = new URL(request.url);
		const instanceName = searchParams.get("instanceName");

		// Validação do parâmetro obrigatório
		if (!instanceName) {
			return NextResponse.json(
				{ error: "Parâmetro obrigatório: instanceName" },
				{ status: 400 },
			);
		}

		// URL do webhook do n8n com o instanceName como instanceId
		const webhookUrl = `${urlBase}/156a5fe8-16fa-4afb-a828-1978969892e8/pairing-code/${encodeURIComponent(
			instanceName,
		)}`;

		// Fazer a requisição GET para o webhook do n8n
		const response = await fetch(webhookUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		// Verificar se a requisição foi bem-sucedida
		if (!response.ok) {
			console.error(
				"Erro ao buscar pairing code:",
				response.status,
				response.statusText,
			);
			return NextResponse.json(
				{ error: "Erro ao buscar código de pareamento" },
				{ status: response.status },
			);
		}

		const data = await response.json();
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error("Erro na rota GET:", error);
		return NextResponse.json(
			{ error: "Erro interno do servidor" },
			{ status: 500 },
		);
	}
}
