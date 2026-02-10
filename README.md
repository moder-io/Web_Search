# Web Search

Este es un proyecto de buscador web simple creado con HTML, CSS y JavaScript. La página incluye accesos directos a aplicaciones populares como Gmail, YouTube, Google Photos, Microsoft Office, y más. También permite realizar búsquedas en la web utilizando Google.

## Características

- **Accesos rápidos**: La página contiene accesos directos a varias aplicaciones como Gmail, YouTube, Google Photos, Microsoft Office, OneDrive, entre otros.
- **Buscador web**: Incluye una barra de búsqueda que redirige a los resultados en Google al pulsar "Enter".
- **Notas**: Hay una sección dedicada para tomar y descargar notas localmente, además de guardar un historial de las últimas notas.
- **Interfaz personalizable**:
  - Cambiar tamaño del texto.
  - Mostrar/ocultar el widget del tiempo.
  - Agregar y borrar iconos personalizados en la barra lateral (guardados en `localStorage`).

## Archivos Principales

- `index.html`: Página principal con buscador, ajustes, barra lateral y widget del tiempo.
- `apps.html`: Página con accesos rápidos (Google/Microsoft) y apps personalizadas.
- `notas.html`: Página donde los usuarios pueden escribir y descargar notas/recordatorios.
- `css/estilos.css`: Estilos globales de la web.
- `css/barra-lateral.css`: Estilos específicos de la barra lateral.
- `js/busqueda.js`: Maneja la funcionalidad del buscador.
- `js/ajustes.js`: Maneja la configuración (tamaño de texto, widget y enlaces de barra lateral).
- `js/notas-script.js`: Maneja notas e historial.
- `js/tiempo.js`: Maneja el widget del tiempo.
- `js/api.js.example`: Plantilla para poner claves y datos sensibles.

## Requisitos

### OpenWeather (opcional)
Para usar el widget del clima necesitas:
- Una API Key de OpenWeather:  
  `https://openweathermap.org/api`

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/moder-io/Web_Search.git
