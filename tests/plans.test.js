'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { PLAN_DEFINITIONS, PLAN_MODULES, FEATURE_MAP } = require('../index.js');

const moduleNames = Object.values(PLAN_MODULES);

test('jeder Plan definiert exakt alle Module als Boolean', () => {
    for (const [name, plan] of Object.entries(PLAN_DEFINITIONS)) {
        assert.deepEqual(Object.keys(plan.modules).sort(), [...moduleNames].sort(), name);
        for (const v of Object.values(plan.modules)) assert.equal(typeof v, 'boolean', name);
    }
});

test('jeder Plan hat Label, Limits und Laufzeit', () => {
    for (const [name, plan] of Object.entries(PLAN_DEFINITIONS)) {
        assert.ok(plan.label, name);
        assert.ok(plan.menu_items > 0, name);
        assert.ok(plan.max_tables > 0, name);
        assert.ok(plan.expires_days >= 0, name);
    }
});

test('höhere Pläne schalten nie weniger Module frei als niedrigere', () => {
    const order = ['FREE', 'STARTER', 'PRO', 'PRO_PLUS', 'ENTERPRISE'];
    for (let i = 1; i < order.length; i++) {
        const lo = PLAN_DEFINITIONS[order[i - 1]];
        const hi = PLAN_DEFINITIONS[order[i]];
        for (const m of moduleNames) {
            if (lo.modules[m]) assert.ok(hi.modules[m], `${order[i]} verliert ${m}`);
        }
        assert.ok(hi.menu_items >= lo.menu_items, order[i]);
        assert.ok(hi.max_tables >= lo.max_tables, order[i]);
    }
});

test('FEATURE_MAP verweist nur auf bekannte Module oder null', () => {
    for (const [feature, mod] of Object.entries(FEATURE_MAP)) {
        assert.ok(mod === null || moduleNames.includes(mod), feature);
    }
});

test('Definitionen sind eingefroren', () => {
    assert.ok(Object.isFrozen(PLAN_DEFINITIONS));
    assert.ok(Object.isFrozen(PLAN_MODULES));
    assert.ok(Object.isFrozen(FEATURE_MAP));
});

test('ESM-Wrapper exportiert dieselben Objekte', async () => {
    const esm = await import('../index.mjs');
    assert.deepEqual(esm.PLAN_DEFINITIONS, PLAN_DEFINITIONS);
    assert.deepEqual(esm.PLAN_MODULES, PLAN_MODULES);
    assert.deepEqual(esm.FEATURE_MAP, FEATURE_MAP);
});
