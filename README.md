Sigue las siguientes instrucciones para clonar este repositorio en tu máquina local.

Pre-requisitos 📋 Para clonar este repositorio, debes tener instalado un servidor Apache, PHP y MSQL (Wamp, Xampp, Mamp o Lamp) y los gerenciadores de dependencias para PHP (Composer) y para NodeJs (Npm).

Antes de comenzar verifica si tienes composer con cualquiera de los siguientes comandos en tu terminal.

composer --version composer -v

Verifica tambien la version de NPM en la terminal con

npm --version Si no lo tienes instalado lo pueden instalar siguiendo la documentación oficial en: https://www.npmjs.com/get-npm

Instalación 🔧 Sigue las siguientes instrucciones para clonar el repositorio

Clone el repositorio

git clone https://github.com/jesmary885/ApiRestJDC.git Instale todas las dependencias del Proyecto con

composer install Como el proyecto tiene dependencias en JS instalelas con

npm install Copie el Archivo .env.example en un archivo nuevo .env con

cp .env.example .env Configure la base de datos y las demas variables de entorno en el archivo .env

Genere una nueva Key para el protecto con

php artisan key:generate Corra las migraciones y seeders del proyecto con

php artisan migrate --seed Corra el proyecto con

php artisan serve
