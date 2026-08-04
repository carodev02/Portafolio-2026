export const whatsappNumber = '51985842746';

export const whatsappAutomaticMessage =
  'Hola, Ximena. Vi tu portafolio y me gustaría conversar contigo sobre un proyecto o una oportunidad de colaboración.';

export function buildWhatsAppUrl(extraMessage?: string) {
  const message = extraMessage
    ? `${whatsappAutomaticMessage}\n\n${extraMessage}`
    : whatsappAutomaticMessage;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
