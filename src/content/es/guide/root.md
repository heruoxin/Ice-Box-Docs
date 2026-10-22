---
title: Modo Root
short: Modo Root
description: "Modo Root: en un teléfono con root, abre Ice Box y dale acceso root. Cómo cambiar de motor root, resolver errores del permiso root y pasar a otro modo de funcionamiento."
section: guide
group: activate
order: 9
faq: true
related: guide/shizuku, guide/other-modes, faq
---

Si tu teléfono tiene root, solo abre Ice Box y permite el acceso cuando tu gestor de root (como Magisk) muestre la solicitud de permiso. No hace falta configurar nada más.

El modo Root sigue funcionando después de reiniciar y no necesita computadora.

## Motores root {#engines}

Ice Box ofrece varios motores root, como "Root (más rápido)" y "Root clásico". Puedes cambiar de uno a otro en "Elegir motor root", dentro de "Laboratorio". Si el motor actual no funciona bien en tu teléfono, prueba con otro.

Antes de cambiar de motor, asegúrate de que todas las apps estén descongeladas.

## Preguntas frecuentes {#faq}

### Aparece "No se pudo obtener el permiso root"

Abre tu gestor de root, borra el registro de autorización de Ice Box y vuelve a darle acceso root a Ice Box.

### Pasar del modo Root a otro modo de funcionamiento

Puedes cambiarlo en "Cambiar modo de funcionamiento", en la configuración de Ice Box. Descongela todas las apps antes de cambiar. Los modos de funcionamiento no son compatibles entre sí, así que las apps se deben descongelar en el mismo modo con el que se congelaron.

### ¿Qué pasó con el antiguo "Plugin del sistema"?

Para cumplir los requisitos de Google Play, el modo Plugin del sistema se eliminó en la versión 3.22.0. En teléfonos con root, usa directamente el modo Root.
