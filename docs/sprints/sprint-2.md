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

## Análisis de seguridad inicial

Durante el sprint se realizó una inspección del almacenamiento utilizado por la aplicación mediante las herramientas de desarrollo del navegador.

Se identificaron las siguientes claves en LocalStorage:

- usuarios
- reservas
- usuarioActivo
- restauranteSeleccionado

La inspección permitió comprobar que la aplicación almacena información de usuarios y reservaciones directamente en el navegador.

### Hallazgos

**SEC-01 — Almacenamiento de credenciales en texto plano**

Se identificó que las credenciales se almacenan directamente en el almacenamiento local del navegador. Esto representa un riesgo alto debido a que la información puede ser consultada mediante las herramientas de desarrollo.

**SEC-02 — Almacenamiento de reservaciones en el cliente**

Se identificó que las reservaciones se almacenan directamente en LocalStorage. Esto permite que la información sea consultada y potencialmente modificada desde el entorno del cliente.

### Acción correctiva

Los hallazgos serán tratados durante el Sprint 3 mediante mejoras en la protección de credenciales, validación de datos y controles de acceso. Debido a que la aplicación actual utiliza una arquitectura exclusivamente del lado del cliente, se documentará como limitación que una solución completa requeriría un backend y almacenamiento seguro del lado del servidor.
