# 🧭 Sistema de Leilões Online

Este projeto é um sistema de leilões online que permite a realização de leilões do tipo **compra** ou **venda**, com controle automático de início e término, notificações em tempo real, múltiplos participantes e lances simultâneos.

## 📌 Visão Geral

A aplicação possibilita que usuários se cadastrem, inscrevam-se em leilões e façam lances. Administradores podem gerenciar leilões, e o sistema cuida automaticamente dos eventos de início, encerramento e notificação.

---

## 🧪 Tecnologias Utilizadas

- **Backend**: Node.js + Fastify
- **Banco de Dados**: PostgreSQL
- **Realtime**: WebSocket
- **Notificações e Agendamento**: Cron Jobs
- **Frontend**: React
- **Autenticação**: JWT ou OAuth2 (em caso de integração futura)

---

## ✅ Funcionalidades

### 🎯 Requisitos Funcionais (RF)

| Código | Descrição |
|--------|----------|
| RF1 | A aplicação deve iniciar e encerrar leilões automaticamente conforme o horário programado. |
| RF2 | Administradores podem cadastrar, modificar e excluir leilões. |
| RF3 | Leilões em andamento não podem ser modificados ou excluídos. |
| RF4 | A aplicação deve permitir o cadastro de usuários com nome e CPF. |
| RF5 | A aplicação deve impedir a edição ou exclusão de leilões que estejam em andamento. |
| RF6 | A aplicação deve permitir que usuários consultem leilões futuros e em andamento. |
| RF7 | A aplicação deve exibir os lances já realizados em um leilão em andamento. |
| RF8 | Participantes podem se inscrever para participar de um leilão. |
| RF9 | Participantes podem fazer lances em leilões em andamento. |
| RF10 | A aplicação deve enviar notificações para participantes quando um novo lance for feito. |
| RF11 | A aplicação deve enviar notificações de alerta a cada 10 segundos no último minuto do leilão. |
| RF12 | A aplicação deve notificar todos os participantes ao final do leilão com o resultado. |
| RF13 | A aplicação deve enviar uma notificação exclusiva ao vencedor do leilão informando sua vitória. |
| RF14 | Um participante pode participar de múltiplos leilões simultaneamente. |

### 🚧 Requisitos Não Funcionais (RNF)

| Código | Descrição |
|--------|----------|
| RNF1 | A aplicação deve ser capaz de realizar múltiplos leilões simultaneamente. |
| RNF2 | As informações sobre leilões e usuários devem ser persistentes. |
| RNF3 | A aplicação deve garantir a integridade e consistência dos dados durante o leilão. |
| RNF4 | O sistema deve garantir alta disponibilidade durante o período de leilões ativos. |

### ⚖️ Regras de Negócio (RN)

| Código | Descrição |
|--------|----------|
| RN1 | Um leilão pode ser do tipo compra (vence o menor lance) ou venda (vence o maior lance). |
| RN2 | Somente leilões com status "futuro" podem ser editados ou excluídos. |
| RN3 | Um lance só é válido se melhorar o valor atual (menor se tipo compra, maior se tipo venda). |
| RN4 | O participante só pode realizar lances se estiver previamente inscrito no leilão. |
| RN5 | O CPF do participante deve ser válido e único no sistema. |
| RN6 | A aplicação deve validar o tempo restante antes de aceitar novos lances. |
| RN7 | Os lances devem ser ordenados por horário para fins de desempate. |
| RN8 | Leilões não podem ser iniciados manualmente, apenas pelo sistema, com base na data/hora. |