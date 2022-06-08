# Rest
We will use the following patterns.

## Curl
### Create a record
Use the following `curl` command to create an object:
````bash
curl --location --request POST 'localhost:3000/<<object_name>>' \
--header 'Content-Type: application/json' \
--data-raw '{
"key": "value",
"...": "...",
"key": "value"
}'
````

Once executed, the service returns the created object id
````json
{
  "id": "8 characters random string"
}
````

### Read a record
Use the following `curl` command to read an object:
````bash
$ curl --location --request GET "localhost:3000/<<object_name>>/$OBJECT_ID" --header 'Content-Type: application/json'
````

Once executed, the service returns the created object id
````json
{
    "key-1": "value",
    "...": "...",
    "key-n": "value"
}
````

### Update a record
Use the following `curl` command to update all the object's patchable attributes:
````bash
curl --location --request PATCH 'localhost:3000/<<object_name>>' \
--header 'Content-Type: application/json' \
--data-raw '{
"ke-1y": "value",
"...": "...",
"ke-n": "value"
}'
````

Once executed, the service returns the patched object
````json
{
  "id": "string",
  "key-1": "value",
  "...": "...",
  "key-n": "value"
}
````

### Delete a record
Use the following `curl` command to delete (deactivate) an object:
````bash
$ curl --location --request DELETE "localhost:3000/object_name/$OBJECT_ID" --header 'Content-Type: application/json'
````

Once executed, the service returns the patched object
````json
{
  "id": "8 characters random string"
}
````

## NON-CRUD application behaviors
The application offers these non-stadard REST calls to trigger NON-CRUD application behaviors:

### Calculate a tournament round
Use the following `curl` command to calculate a tournament round:
````bash
curl --location --request PATCH 'localhost:3000/tournament/$TOURNAMENT_ID/calculateTournamentRound'
````

Once executed, the service returns the calculated a tournament round

````json
{
    "game-1": {"key-1": "value", "...": "...", "key-n": "value"},
    "...": {"key-1": "value", "...": "...", "key-n": "value"},
    "game-n": {"key-1": "value", "...": "...", "key-n": "value"}
}
````

#### API
tbd
