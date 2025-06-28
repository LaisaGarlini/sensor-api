
# API de Monitoramento de Sensores IoT

> Esta API simula um sistema de monitoramento de sensores IoT, permitindo visualizar leituras registradas. A aplicação foi desenvolvida durante as aulas da matéria de Cloud Computing do curso de Sistemas de Informação da UNIDAVI, para um trabalho que tem como objetivo simular um fluxo DevOps completo, desde a criação de uma API até sua implantação automatizada na nuvem.

## 🚀 Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/LaisaGarlini/sensor-api.git
cd sensor-api
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar a API localmente

```bash
npm start
```

Acesse no navegador ou via Insomnia:
- http://localhost:3000/status
- http://localhost:3000/leituras_sensores

### 4. Executar os testes unitários

```bash
npm test
```

---

## 🔁 Rotas da API

### GET /status
Verifica se a API está funcionando corretamente.

**Exemplo de resposta:**
```json
{
  "status": "API está funcionando corretamente!"
}
```

---

### GET /leituras_sensores
Retorna um array de objetos simulando as leituras de sensores.

**Exemplo de resposta:**
```json
[
  {
    "id_sensor": "TEMP_SALA_A01",
    "tipo": "Temperatura",
    "localizacao": "Sala de Reuniões A - Bloco 1",
    "valor": "23.5°C",
    "timestamp": "2025-06-04T10:30:00Z",
    "unidade_medida": "Celsius"
  }
]
```

---

## 🧪 Testes
Os testes automatizados foram criados com Jest. Eles cobrem:
- Validação da rota `/status`
- Estrutura e conteúdo da rota `/leituras_sensores`
- Verificação de consistência nos dados retornados

---

## 👨‍💻 Tecnologias utilizadas
- Node.js
- Express
- Jest

---

## 📁 Estrutura de diretórios

```
sensor-api/
├── dados/
│   └── leituras_sensores.json
├── src/
│   └── index.js
├── tests/
│   └── sensores.test.js
├── package.json
├── README.md
└── .gitignore
```

---


