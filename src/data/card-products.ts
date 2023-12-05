import { ReactNode } from "react";

interface CardProductProps {
  icon?: () => ReactNode;
  title: string;
  description: string;
}

export const CardProduct: CardProductProps[] = [
  {
    title: "Logística",
    description:
      "Acesso seguro com 2FA.Uso de números mascarados para proteção de funcionárioe cliente. Mantenha o cliente informado sobre entrega de serviços.Verified calling para confirmação de entregas.",
  },
  {
    title: "Varejo",
    description:
      "Compra segura com 2FA. Avisos sobre compras e entregas. Upsell com novas ofertas e vantagens via SMS ou Verified Calling",
  },
  {
    title: "Call Center",
    description:
      "Melhore taxas de abertura utilizando alertas SMS para confirmações. Economia de números com o uso de um único número máscara por todos os agentes. Verified Calling para confirmação de agendamentos. ",
  },
  {
    title: "Saúde",
    description:
      "Acesso seguro com 2FA.Melhore o agendamento e reduza faltas com lembretes por SMS. Tokens de autorização para procedimentos com 2FA. Verified Calling para avisos de resultados e agendamentos.",
  },
];
