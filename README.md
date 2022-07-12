# Crypto_tracker

Crypto_tracker is a cryptocurrency price tracker project that helps users to keep track of different cryptocurrencies. In this project, users can also filter out various cryptocurrencies as per selected currency of a particular country.

## Demo

```
https://cryptocurrency-tracker-site.netlify.app/
```

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed748ad7-c462-417f-b7f6-d361a8babaf1/deploy-status)](https://app.netlify.com/sites/spectacular-crostata-8f3623/deploys)

## Tech Stack

```
Client: HTML, CSS, Javascript, React.JS 

API Consumption: Axios 

API endpoint testing: Postman
```

## API Reference

#### Get all coins data

```code
  GET https://api.coingecko.com/api/v3/coins
```
#### Get all coins data for specific market

```code
  GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=<user__market>

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| <user__market>      | `string` | Example: "cad" for Canada |

```
  Example Endpoint:
  GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad
```

