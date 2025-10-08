import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, QrCode } from "lucide-react";
import { getTranslations } from "next-intl/server";
import CopyCodeButton from "./components/CopyCodeButton";

export default async function ActivatePage() {
  const t = await getTranslations("ActivatePage");
  const activationCode = "MTA-789-XYZ-456"; // Código de exemplo

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("welcome")}
          </h1>
          <p className="text-gray-600">{t("accountCreated")}</p>
        </div>

        {/* Card de Ativação */}
        <Card className="w-full shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-gray-800">
              {t("activateAccount")}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">{t("scanOrUseCode")}</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* QR Code Placeholder */}
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
                <QrCode className="h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 text-center whitespace-pre-line">
                  {t("qrCodePlaceholder")}
                </p>
              </div>
            </div>

            {/* Separador */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  {t("orText")}
                </span>
              </div>
            </div>

            {/* Código Manual */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                {t("manualCodeLabel")}
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-md">
                  <code className="text-sm font-mono text-gray-800">
                    {activationCode}
                  </code>
                </div>
                <CopyCodeButton
                  code={activationCode}
                  copyText={t("copyButton")}
                  toastMessages={{
                    codeCopied: t("toast.codeCopied"),
                    codeCopiedDescription: t("toast.codeCopiedDescription"),
                    copyError: t("toast.copyError"),
                    copyErrorDescription: t("toast.copyErrorDescription"),
                  }}
                />
              </div>
            </div>

            {/* Instruções */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                {t("howToActivate")}
              </h3>
              <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                <li>{t("instructions.step1")}</li>
                <li>{t("instructions.step2")}</li>
                <li>{t("instructions.step3")}</li>
              </ol>
            </div>

            {/* Aviso sobre WhatsApp */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-green-800">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">
                  {t("whatsappConfirmation")}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>{t("needHelp")}</p>
        </div>
      </div>
    </div>
  );
}
