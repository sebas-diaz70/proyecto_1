"use strict";

// Funciones de validación

function toNumeberString(value, label = "Valor") {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new Error(`${label} debe ser un número válido`);
  }
  return n;
}

function assertNonNegative(value, label = "Valor") {
  if (value < 0) {
    throw new Error(`${label} debe ser un número no negativo`);
  }
}

function toNonEmptyString(value, label = "Valor") {
  const s = String(value).trim();
  if (s.length === 0) {
    throw new Error(`${label} no puede ser una cadena vacía`);
  }
  return s;
}

// Normalizar gasto

function nomalizeExpense(raw) {
  const id = toNumeberString(raw.id, "ID");
  const fecha = toNonEmptyString(raw.fecha, "Fecha");
  const categoria = toNonEmptyString(raw.categoria, "Categoría");
  const descripcion = toNonEmptyString(raw.descripcion, "Descripción");
  const monto = toNumeberString(raw.monto, "Monto");

  assertNonNegative(monto, "Monto");

  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto,
  };
}

// Dataset de gastos

const expenses = [
  nomalizeExpense({
    id: 1,
    fecha: "2024-01-15",
    categoria: "Alimentación",
    descripcion: "Compra en supermercado",
    monto: 850000,
  }),
  nomalizeExpense({
    id: 2,
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Pasaje de bus",
    monto: 150000,
  }),
  nomalizeExpense({
    id: 3,
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Entrada al cine",
    monto: 500000,
  }),
  nomalizeExpense({
    id: 4,
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: 200000,
  }),
  nomalizeExpense({
    id: 5,
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Curso en línea",
    monto: 1200000,
  }),
];

// Estadísticas básicas

function calStats(expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  const values = expenses.map((e) => e.monto);

  const total = values.reduce((acc, n) => acc + n, 0);

  const minimo = Math.min(...values);

  const maximo = Math.max(...values);

  const promedio = total / values.length;

  return { total, promedio, maximo, minimo };
}

// Totales por categoría

function totalByCategory(expenses) {
  return expenses.reduce((acc, e) => {
    acc[e.categoria] = (acc[e.categoria] || 0) + e.monto;
    return acc;
  }, {});
}

// Gasto más alto

function maxExpense(expenses) {
  return expenses.reduce((max, e) => (e.monto > max.monto ? e : max));
}

// Últimos gastos

function lastExpenses(expenses, n = 3) {
  return expenses.slice(-n);
}

// Formato moneda COP

function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

// Reporte en consola

function printReport(expenses) {
  const stats = calStats(expenses);
  const byCat = totalByCategory(expenses);

  console.group("REPORTE - ANALIZADOR DE GASTOS");

  console.log("Resumen");

  console.table([
    {
      Total: formatCOP(stats.total),
      Promedio: formatCOP(stats.promedio),
      Minimo: formatCOP(stats.minimo),
      Maximo: formatCOP(stats.maximo),
      Registros: expenses.length,
    },
  ]);

  console.log("Totales por categoría:");
  console.table(
    Object.entries(byCat).map(([categoria, total]) => ({
      categoria,
      total: formatCOP(total),
    })),
  );

  console.log("Gasto más alto:");
  console.table([maxExpense(expenses)]);

  console.log("Últimos gastos:");
  console.table(lastExpenses(expenses));

  console.groupEnd();
}

// Ejecutar reporte

printReport(expenses);
