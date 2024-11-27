# back-ikbo
Repositorio que alberga el back para la prueba técnica para Ingeniero de Desarrollo Senior para IBK S.A.S

Backend Realizado con:
* NodejS V22.11.0
* NPM 10.9.0
* MySQL 8.0.40

Para la ejecucion del codigo es neceario crear un archivo .env en la raiz del mismo, este archivo debe contener
la siguiente información:

DB_HOST = localhost
DB_USER = root
DB_PASSWORD = password
DB_NAME = ikbo_inventory

DB_HOST ===> es la Url donde se almacena la base de datos
DB_USER ===> es el usuario que dispone de conexion al gestor y a la base de datos
DB_PASSWORD ===> es la contraseña del usuario que dispone de conexion al gestor y a la base de datos
DB_NAME ===> es el nombre de la base de datos, este campo no cambia

Antes de ejecutar el proyecto es necesario relizar la instalacion de las dependencias con el comando:
npm install

Posteriormente se debe compilar el codigo con el comando:
npm run build

Y una vez hecho este paso se puede ejecutar el servidor con cualquiera de los siguientes comandos:
npm run start
npm run start:dev


Si surgen problemas de compilacion, es recomandable eliminar las carpetas dist y logs que se crean en la
raiz del proyeto y compilar nuevamente