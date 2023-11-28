# irmao-tabnews

Projeto do curso de programação da plataforma https://curso.dev

## Scripts

Subir container Docker no modo detched

```bash
docker compose up -d
```

---

Subir container Docker com arquivo especifico de configuração

```bash
docker compose -f infra/compose.yaml up
```

---

Destruir container docker

```bash
docker compose down
```

---

Subir o serviço de banco de dados

```bash
docker compose -f infra/compose.yaml up -d
```

---

Parar o serviço de banco de dados

```bash
docker compose -f infra/compose.yaml stop -d
```

---

Olhar status de container docker

```bash
docker ps # or
docker ps --all
```