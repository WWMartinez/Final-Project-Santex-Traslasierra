# Final-Project-Santex-Traslasierra
npx nodemon dist/index.js 
(genera el servidor de desarrollo, que se actualiza cuando se genera cambios)

npx tsc --watch 
(Cada vez que se haga un cambio en un archivo TS este comando lo esta viendo y va a volver a general la carpeta dist y nodemon a su vez va estar viendo esos cambios y nos va a mostrar el resultado)

Dentro del archivo package.json estan los scripts "dev": "nodemon dist/index.js" y "typescript": "tsc --watch"


(Importante) - Antes debes crear la base de datos app-mina

(Importante para desplegar la App) {
Ejecutando los comandos npm run dev (Va a ejecutar el proyecto)
                        npm run typescript (Que va a visualizar los cambios generados)  



Proyecto Final Santex Education With Purposes.

Documentación de la Aplicación Web Mina Clavero
Resumen
Este documento detalla el proceso de desarrollo de la Aplicación Web Mina Clavero, una plataforma informativa diseñada para tres tipos de roles: Usuario, Encuestador y Administrador. 
La aplicación ofrece funcionalidades específicas a cada uno de estos roles, con un enfoque en la claridad, estética y usabilidad.

Requerimientos
La Aplicación Web Mina Clavero se desarrolló con los siguientes requerimientos principales:

Creación de una aplicación informativa.
Implementación de tres roles: Usuario, Encuestador y Administrador.
Diseño Inicial
Para comenzar el proyecto, se realizó una fase de diseño que involucró la creación de una maqueta del Front-End. 
Esta maqueta permitió visualizar y planificar las funcionalidades necesarias para garantizar la claridad y la atractiva presentación de la aplicación.

Roles y Funcionalidades

Usuario
-
Los usuarios tienen acceso a las siguientes funcionalidades:
Visualización de información general.
Acceso a encuestas y formularios.

Encuestador
-
Los encuestadores cuentan con las siguientes funcionalidades:
Acceso a la sección de encuestas.
Realización de operaciones CRUD en encuestas.

Administrador
-
Los administradores tienen acceso a las siguientes funcionalidades:
Acceso al panel de control (Dashboard).
Gestión completa de encuestas mediante operaciones CRUD.


Implementación
-

Back-End
-
En el Back-End, se implementaron los roles de Encuestador y Administrador. Se creó una base de datos que almacena de manera segura los nombres y contraseñas encriptadas de los Encuestadores y Administradores.

Autenticación y Autorización
-
Se empleó el protocolo JWT (JSON Web Token) para gestionar la autenticación y autorización de usuarios. Solo los Administradores tienen acceso al Dashboard y la sección de encuestas con operaciones CRUD, mientras que los Encuestadores solo pueden acceder a la sección de encuestas.

Modelos y Referencias
-
Se proporcionan los siguientes modelos y referencias:

Modelo de Encuestas para Usuarios: (Link / Youtube)

Modelo de Login: (Front-End / Back-End / Youtube)

Modelo del Dashboard: (GitHub / Youtube)

Modelo CRUD de Encuestas: (Front-End / Back-End / Youtube)

Próximos Pasos
-
Con la base sólida implementada, los siguientes pasos incluirán:

Ampliar las funcionalidades existentes.
Implementar mejoras adicionales para enriquecer la experiencia del usuario.

Conclusión
-
La Aplicación Web Mina Clavero ofrece una experiencia interactiva y personalizada a través de sus diferentes roles. La atención a la claridad, usabilidad y diseño estético garantiza una plataforma atractiva y funcional para sus usuarios.

Esta documentación proporciona una visión general del desarrollo de la aplicación y sirve como referencia para futuras iteraciones y mejoras.
