# Challenge ForIT

Esta es una aplicación React que consume datos de una API REST y permite gestionar usuarios de forma interactiva.

## Características

Obtiene y muestra datos de usuarios desde https://jsonplaceholder.typicode.com/users.
Filtro en tiempo real por nombre, email o ciudad.
Permite agregar nuevos usuarios (guardados en memoria temporalmente).
Requisitos previos
Para ejecutar esta aplicación, necesitas tener instalado:

```
Node.js

npm
```

## Instalación y ejecución

>Sigue los pasos para correr la aplicación en tu entorno local:

Clona este repositorio o descarga los archivos.

```
git clone https://github.com/tu-repo.git
cd nombre-del-proyecto
```

>Instala las dependencias.
```
npm install
```
>Inicia el servidor de desarrollo.

```
npm start
```

>Abre tu navegador y accede a http://localhost:5173/.

## Uso de la aplicación
La página principal obtiene la lista de usuarios desde la API y los presenta en tarjetas.

Puedes:

Usar la barra de búsqueda para filtrar por nombre, email o ciudad.
Hacer clic en una tarjeta para expandir la información del usuario.
Hacer clic en "Add Users +" para agregar un nuevo usuario. (Los usuarios agregados se almacenan en memoria.)

## Estructura del proyecto
```
/src
  ├── assets/        
  ├── components/    
  │   ├── AddUserForm.jsx  # Formulario para agregar usuarios  
  │   ├── Cards.jsx        # Componente de tarjetas de usuario  
  │   ├── InputUser.jsx    # Input para búsqueda de usuarios  
  ├── App.jsx          # Componente principal de la aplicación  
  ├── index.css        # Estilos generales de la aplicación  
  ├── main.jsx         # Punto de entrada de la aplicación  
/public  
  ├── img/  
  │   ├── FIT.png  
```
## Tecnologías utilizadas

*React.js

*JavaScript

*CSS

*Axios (para llamadas a la API)

*Node.js

*Vite
