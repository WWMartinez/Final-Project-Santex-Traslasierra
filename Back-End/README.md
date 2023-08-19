npx nodemon dist/index.js 
(genera el servidor de desarrollo, que se actualiza cuando se genera cambios)

npx tsc --watch 
(Cada vez que se haga un cambio en un archivo TS este comando lo esta viendo y va a volver a general la carpeta dist y nodemon a su vez va estar viendo esos cambios y nos va a mostrar el resultado)

Dentro del archivo package.json estan los scripts "dev": "nodemon dist/index.js" y "typescript": "tsc --watch"

Ejecutando los comandos npm run dev (Va a ejecutar el proyecto)
                        npm run typescript (Que va a visualizar los cambios generados) 



-- Es importante tener en cuenta que el formulario puede estar formado por respuestas de tipo String 


