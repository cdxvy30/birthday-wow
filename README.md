# Birthday Greeting Backend
This is the assignment for interviewing Line Tech Fresh 2024 Spring Class Backend. Basically provide the function of greeting people whose birthday is that day.
There are six version of birthday greeting API, the example of different version is below.

## How to use
1. Clone the repo:
  ```
  git clone https://github.com/cdxvy30/birthday-wow.git
  ```
2. Checkout to the branch `vX` ( `X = 1~6` )
  ```
  git checkout v1
  ```
3. Docker compose:
  ```
  docker-compose up
  ```
4. Server is listening on 5050 (Endpoint example: `/api/vX/greeting/birthday`, `X` depends on which branch you are)
5. You can also check API document generated by swagger in `localhost:5050/api-docs`.

## Versioning
### V1
Simple message. If today is 8/8, this API will response:
```
{
    "data": [
        {
            "title": "Subject: Happy Birthday!",
            "content": "Happy birthday, dear Robert!"
        },
        {
            "title": "Subject: Happy Birthday!",
            "content": "Happy birthday, dear Sherry!"
        }
    ]
}
```

### V2
Simple message but different gender will get different birthday account. If today is 8/8, this API will response:
```
{
    "data": [
        {
            "title": "Subject: Happy Birthday!",
            "content": "Happy birthday, dear Robert!\nWe offer special discount 20% off for the following items:\nWhite Wine, iPhone X"
        },
        {
            "title": "Subject: Happy Birthday!",
            "content": "Happy birthday, dear Sherry!\nWe offer special discount 50% off for the following items:\nCosmetic, LV Handbags"
        }
    ]
}
```

### V3
Simple message. However, those who elder than 49 will get an additional greeting picture.

### V4
Simple message with full name:
```
{
    "data": [
        {
            "title": "Subject: Happy Birthday!",
            "content": "Happy birthday, dear Yen, Robert!"
        },
        {
            "title": "Subject: Happy Birthday!",
            "content": "Happy birthday, dear Chen, Sherry!"
        }
    ]
}
```

### V5
Simple message but the data is stored in MongoDB while in previous version is stored in PostgreSQL.

### V6
Simple message but with XML format:
```
<root>
    <greeting>
        <title>Subject: Happy Birthday!</title>
        <content>Happy birthday, dear Robert!</content>
    </greeting>
    <greeting>
        <title>Subject: Happy Birthday!</title>
        <content>Happy birthday, dear Sherry!</content>
    </greeting>
</root>
```

## Tech Stack
- Backend: Node.js (JavaScript)
- Database: PostgreSQL, MongoDB
- Deploy: Docker
- API Document: Swagger-Autogen
- Testing: Jest
