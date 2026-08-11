# Sprint 3 — Seguridad y calidad

## Objetivo

Mejorar la seguridad y calidad de ReservaFácil a partir de los hallazgos identificados durante las pruebas del Sprint 2.

## Historias de usuario

- HU-11 — Cancelar una reservación.
- HU-15 — Validar los datos ingresados.
- HU-16 — Proteger las credenciales de los usuarios.
- HU-13 — Consultar las reservaciones como administrador.
- HU-14 — Modificar o cancelar reservaciones como administrador.

## Hallazgos de seguridad a atender

- SEC-01 — Almacenamiento de credenciales en texto plano.
- SEC-02 — Almacenamiento de reservaciones en el cliente.

## Actividades

- Implementar protección de credenciales.
- Mejorar la validación de formularios.
- Validar los datos de las reservaciones.
- Revisar el control de acceso a las reservaciones.
- Implementar cancelación de reservaciones.
- Ejecutar pruebas de seguridad.
- Ejecutar pruebas de regresión.
- Documentar las limitaciones de la arquitectura actual.

## Criterios de aceptación

- Las contraseñas no deben almacenarse directamente en texto plano.
- Los datos ingresados deben validarse antes de procesarse.
- Las reservaciones deben asociarse al usuario correspondiente.
- El sistema debe impedir datos de reservación inválidos.
- El usuario debe poder cancelar una reservación.
- Las funcionalidades existentes deben continuar funcionando después de las modificaciones.

## Entregable

Versión mejorada de ReservaFácil con controles adicionales de seguridad, validación de datos y pruebas de regresión.
