# Variáveis de Ambiente

Este documento tem o objetivo de informar todas as variáveis de ambiente que são utilizadas para rodar o projeto localmente e as variáveis utilizadas na configuração do CI.

<hr/>

## **Variáveis env default (raiz do projeto)**

- **THEME**= Esta variável tem o objetivo de entender para qual tema (default, sugestion01)
  estamos querendo rodar o aplicativo. Com isso, features, cores e afins mudam.

<hr/>

- **GOOGLE_MAPS_API_KEY** = Estas são as chaves que são utilizadas pela api do google maps, elas são simples de configurar no CI e na ENV do projeto é só criar elas com mesmo nome e adicionar as chaves. As chaves podem ser geradas a partir da url (https://console.cloud.google.com/google/maps-apis/credentials)
<hr/>

- **OPEN_WEATHER_URL** = Esta é a url da api que foi utilizada para busca de informações do tempo. Você pode buscar esse dado a partir da documentação (https://openweathermap.org/current)

- **OPEN_WEATHER_KEY** = Esta é a KEY da api que foi utilizada para busca de informações do tempo. Você pode buscar esse dado a partir da documentação (https://openweathermap.org/current)
