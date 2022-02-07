openapi: 3.0.1
info:
  title: API de saludos
  description: API para saludar
  version: 1.0.0

servers:
  - url: apidesaludos.com
    description: URL principal
  - url: apidesaludostest.com
    description: URL de testing
tags:
  - name: saludo
    description: rutas encargadas de saludar al usuario
  - name: despedir
    description: rutas encargadas de despedir al usuario
  - name: usuario
    description: endpoint de usuarios

paths:
  /saludo/{nombre}:
    get:
      tags:
        - saludo
      summary: Retorna un saludo con el nombre y query (opcional)
      description: Descripción extensa
      parameters:
        - in: path
          name: nombre
          required: true
          description: ...
          schema:
            type: string
            
        - in: query
          name: extra
          required: false
          description: ...
          schema:
            type: string
      
            
      responses:
        "200":
          description: "Retorna un json con un string llamado saludo"
    
        
  /despedir:
    post:
      tags:
        - despedir
      summary: Endpoint que despide al usuario
      description: ...
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                saludo:
                  type: string
                  
                  
      responses:
        "200":
          description: ...
          content:
            application/json:
              schema:
                type: object
                properties:
                  saludo:
                    type: string
        "500":
          description: ...
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
  /usuario:
    post:
      tags:
        - usuario
      summary: Endpoint para logear al usuario
      description: ...
      requestBody:
        required: true
        content:
          application/json:
              schema:
                $ref: '#/components/schemas/User'
                  
            
      responses:
        "200":
          description: ...
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'

        "500":
          description: ...
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
        
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          description: Id del usuario
        username:
          type: string
          description: Nombre del usuario
          minimum: 8
        password:
          type: string
          description: Contraseña del usuario
          minimum: 8
        rol:
          type: string
          description: Rol del usuario
          enum: [usuario, mod, admin]
          default: usuario

          

          
          
  
    
    
        
      
            
            
            
            
    