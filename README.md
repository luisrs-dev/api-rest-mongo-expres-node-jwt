# Proyecto de Autenticación con Node.js, Express, MongoDB y JWT

Este proyecto es una aplicación de autenticación desarrollada con Node.js, Express, MongoDB y JSON Web Tokens (JWT) para implementar autenticación y autorización segura. La aplicación permite a los usuarios registrarse, iniciar sesión y obtener tokens JWT para acceder a recursos protegidos. Además, se utiliza un mecanismo de tokens de actualización (refresh tokens) para mantener la sesión activa de manera segura y eficiente. A continuación, se detallan las características principales y cómo configurar y ejecutar el proyecto en tu máquina local.

## Características

- Registro de usuarios con almacenamiento seguro de contraseñas en la base de datos.
- Autenticación con JWT para generar y verificar tokens de acceso.
- Emisión y uso de refresh tokens para mantener las sesiones activas.
- Protección de rutas y recursos utilizando middleware de autenticación.

## Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el Repositorio:**
   ```
   git clone <URL del repositorio>
   ```

2. **Instala Dependencias:**
   - Asegúrate de tener Node.js y npm instalados.
   - Navega a la carpeta del proyecto y ejecuta:
     ```
     npm install
     ```

3. **Configura la Base de Datos MongoDB:**
   - Asegúrate de tener MongoDB instalado y en funcionamiento.
   - En el archivo `config/config.js`, configura la URL de conexión a tu base de datos MongoDB.

4. **Configura las Claves Secretas:**
   - En el archivo `config/config.js`, configura las claves secretas para JWT y los refresh tokens.
   - JWT_SECRET, JWT_REFRESH_TOKEN

5. **Ejecuta el Proyecto:**
   - Ejecuta el siguiente comando para iniciar el servidor:
     ```
     node app.js
     ```
   - El servidor estará disponible en `http://localhost:5000/`.

## Uso

- Regístrate como nuevo usuario proporcionando un nombre de usuario y contraseña.
- Inicia sesión utilizando tus credenciales.
- Obtén tokens de acceso y refresh tokens.
- Utiliza los tokens para acceder a rutas protegidas. Los refresh tokens pueden usarse para obtener nuevos tokens de acceso cuando expiren.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, realiza un fork del repositorio, crea una rama para tus cambios y envía un pull request una vez que hayas finalizado.

## Contacto

Si tienes preguntas o comentarios, no dudes en ponerte en contacto.
