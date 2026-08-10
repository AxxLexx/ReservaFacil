# Sprint 2 — Gestión de reservaciones

## Objetivo

Validar y consolidar el flujo principal de ReservaFácil para permitir que un usuario seleccione un restaurante, configure su reservación y consulte posteriormente las reservas realizadas.

## Historias de usuario

- HU-06 — Seleccionar fecha.
- HU-07 — Seleccionar hora disponible.
- HU-08 — Indicar número de personas.
- HU-09 — Confirmar reservación.
- HU-10 — Consultar mis reservaciones.
- HU-11 — Cancelar una reservación.

## Actividades

- Validar la selección del restaurante.
- Validar la selección de fecha.
- Validar la selección de horario.
- Validar el número de personas.
- Validar la disponibilidad de mesas.
- Validar la creación de una reservación.
- Validar la confirmación de la reservación.
- Validar la consulta de reservaciones.
- Validar la cancelación de reservaciones.

## Criterios de aceptación

- El usuario puede seleccionar un restaurante.
- El usuario puede seleccionar una fecha válida.
- El usuario puede seleccionar un horario.
- El usuario puede indicar el número de personas.
- El sistema permite seleccionar una mesa disponible.
- El sistema impide seleccionar una mesa no disponible.
- La reservación se registra correctamente.
- El usuario puede visualizar su reservación posteriormente.
- El usuario puede cancelar una reservación.

## Entregable

Flujo de reservación funcional y validado, incluyendo consulta y cancelación de reservas.

## Resultados de las pruebas

Se realizaron pruebas sobre el flujo principal de reservaciones.

| ID | Caso de prueba | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|
| CP-07 | Crear reservación válida | La reservación debe registrarse correctamente | La reservación fue creada correctamente | Aprobado |
| CP-08 | Intentar reservar una mesa ocupada | El sistema debe impedir la reserva | El sistema impidió seleccionar la mesa ocupada | Aprobado |
| CP-09 | Ingresar datos inválidos | El sistema debe rechazar información inválida | Los datos inválidos fueron rechazados | Aprobado |
| CP-10 | Consultar mis reservas | La reservación creada debe aparecer | La reservación apareció correctamente | Aprobado |
| CP-11 | Cancelar reservación | El usuario debería poder cancelar una reserva | La funcionalidad no se encuentra implementada en esta versión | Pendiente |

## Métricas

- Casos de prueba ejecutables: 4
- Casos aprobados: 4
- Casos pendientes: 1
- Tasa de aprobación de pruebas ejecutables: 100%

## Hallazgos

Durante las pruebas no se identificaron errores funcionales en las funcionalidades disponibles.

Se identificó como mejora pendiente la implementación de la cancelación de reservaciones. Esta funcionalidad permanecerá registrada en el backlog para una futura iteración.

## Cierre

El flujo principal de creación y consulta de reservaciones fue validado satisfactoriamente.
