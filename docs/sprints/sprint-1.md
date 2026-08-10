# Sprint 1 — Usuarios e interfaz

## Objetivo

Implementar y validar las funcionalidades relacionadas con la gestión básica de usuarios y la interfaz inicial de ReservaFácil.

## Historias de usuario

- HU-01 — Registro de usuario
- HU-02 — Inicio de sesión
- HU-03 — Cierre de sesión
- HU-04 — Visualización de la página principal
- HU-05 — Consulta de opciones disponibles

## Actividades

- Revisar el funcionamiento del registro.
- Revisar el inicio de sesión.
- Validar el cierre de sesión.
- Verificar la navegación entre las pantallas.
- Validar los formularios principales.
- Detectar y corregir errores.
- Ejecutar pruebas funcionales iniciales.

## Criterios de aceptación

- El usuario puede registrarse correctamente.
- El sistema evita registros con información inválida.
- El usuario puede iniciar sesión con sus credenciales.
- El sistema rechaza credenciales incorrectas.
- El usuario puede cerrar sesión.
- Las páginas principales son accesibles mediante la navegación.
- Los datos introducidos por el usuario son validados.

## Entregable

Primera versión funcional validada del módulo de usuarios e interfaz de ReservaFácil.

## Resultados de las pruebas funcionales

Durante la revisión del Sprint 1 se realizaron pruebas funcionales sobre el registro, inicio de sesión, cierre de sesión y navegación principal.

| ID | Caso de prueba | Resultado esperado | Resultado obtenido | Estado |
| ---- |----------------|--------------------|--------------------|--------|
|CP-01 | Registro válido | El usuario debe registrarse correctamente | El usuario fue registrado correctamente | Aprobado |
|CP-02 | Registro inválido | El sistema debe rechazar información inválida | El sistema rechazó los datos inválidos | Aprobado |
|CP-03 | Inicio de sesión válido | El usuario debe acceder al sistema | El acceso fue concedido correctamente | Aprobado |
|CP-04 | Inicio de sesión incorrecto | El sistema debe impedir el acceso | El acceso fue rechazado correctamente | Aprobado |
|CP-05 | Cierre de sesión | El sistema debe cerrar la sesión | El usuario regresó a la pantalla de inicio de sesión | Aprobado |
|CP-06 | Navegación | Las páginas principales deben ser accesibles | La navegación funcionó correctamente | Aprobado |

### Métricas iniciales

- Casos de prueba ejecutados: 6
- Casos aprobados: 6
- Casos rechazados: 0
- Tasa de éxito: 100%

Las pruebas realizadas corresponden a una validación funcional inicial. Las pruebas específicas de seguridad y rendimiento serán realizadas en las siguientes fases del proyecto.
