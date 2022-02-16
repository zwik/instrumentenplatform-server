# Instrumentenplatform Halley

Backend for [observatory Halley in Vinkel](https://www.sterrenwachthalley.nl/). This is a GraphQL implementation using Apollo server. The data that will be inserted into the database is coming from a weather station and some other tools that are related to the earth and sky.

## TODO
- When selecting a large period a lot of data is fetch. Use a modulo similar like this:
```sql
SELECT * FROM `temperatuur` WHERE MOD(MINUTE(datetime), 5) = 0;
```