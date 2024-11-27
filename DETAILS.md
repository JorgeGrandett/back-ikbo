Para la realizacion de este codigo se siguio un paron de  arquitectura limpia y código limpio aporta claridad, escalabilidad y mantenimiento al proyecto. Esta diviendo el código en capas bien definidas (dominio, aplicación, infraestructura, presentación), desacoplando las dependencias y permitiendo que los cambios en una capa no afecten a las demás. Además, el uso de código limpio garantiza que el proyecto sea fácil de entender, modificar y extender, lo que reduce costos y errores a largo plazo.

Uso de TypeScript:
Su tipado estatico ayuda a detectar errores en tiempo de desarrollo, aumentando la confiabilidad, ademas de que facilita la comprensión del código al declarar explícitamente tipos y estructuras.

Uso exclusivo de procedimientos almacenados:
Al ejecutarse directamente en la base de datos, optimizan las operaciones y reducen la latencia; por otro lado tambien evitan inyecciones SQL al encapsular las consultas dentro del servidor de base de datos, ademas de que permite la reutilizacion de estos SP permitiendo que puedan ser llamados desde cualquier capa, manteniendo la lógica centralizada y estandarizada.
