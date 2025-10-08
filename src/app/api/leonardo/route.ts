import { NextRequest, NextResponse } from "next/server";

interface WebhookPayload {
  name: string;
  whatsapp: string;
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse do body da requisição
    const body: WebhookPayload = await request.json();

    // Validação básica dos campos obrigatórios
    if (!body.name || !body.whatsapp || !body.email) {
      return NextResponse.json(
        { error: "Campos obrigatórios: nome, whatsapp, email" },
        { status: 400 }
      );
    }

    // URL do webhook do n8n
    const webhookUrl =
      "https://n8n.leonardocintra.com.br/webhook/70c748e8-aa20-4d82-bb36-95f85d7fecc3";

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
        response.statusText
      );
      return NextResponse.json(
        { error: "Erro interno do servidor" },
        { status: 500 }
      );
    }

    // Retornar sucesso
    return NextResponse.json(
      { message: "Dados enviados com sucesso", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro na rota POST:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
