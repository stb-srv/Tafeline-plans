<p align="center"><img src="logo.png" alt="Tafeline Plans" width="320" /></p>

# @tafeline/plans

Gemeinsame Lizenz-Plan-Definitionen für **Tafeline CMS** und **Tafeline License Server** — die einzige Quelle der Wahrheit für `PLAN_DEFINITIONS` und `PLAN_MODULES`.

## Verwendung

Als Git-Dependency in `package.json`:

```json
"dependencies": {
    "@tafeline/plans": "github:stb-srv/tafeline-plans"
}
```

CommonJS (tafeline-cms):

```js
const { PLAN_DEFINITIONS, PLAN_MODULES } = require('@tafeline/plans');
```

ESM (tafeline-licens):

```js
import { PLAN_DEFINITIONS, PLAN_MODULES } from '@tafeline/plans';
```

## Regeln

- Plan-Definitionen **nur hier** bearbeiten — nie in den konsumierenden Projekten duplizieren.
- Nach Änderungen in den Konsumenten `npm update @tafeline/plans` ausführen, damit die neue Version gezogen wird.
- Modul-Namen immer über die `PLAN_MODULES`-Konstanten referenzieren, nicht als String-Literale.
