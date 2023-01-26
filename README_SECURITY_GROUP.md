[Strona główna](https://github.com/rafalbalinski/Multifib) |
[Redis](https://github.com/rafalbalinski/Multifib/blob/master/README_REDIS.md) |
[PostgreSQL](https://github.com/rafalbalinski/Multifib/blob/master/README_POSTGRESQL.md) |
[**Grupy bezpieczeństwa**](https://github.com/rafalbalinski/Multifib/blob/master/README_SECURITY_GROUP.md) |
[AWS CLI](https://github.com/rafalbalinski/Multifib/blob/master/README_AWS_CLI.md)

# SECURITY GROUP

## Tworzenie grupy bezpieczeństwa
Aby serwery mogłby się komunikować z bazami **postgreSQL** oraz **Redis**
należy utworzyć grupę bezpieczeństwa w której zdefiniowane zostanie
na jakich portach serwisy mogą się między sobą komunikować <br>
![screen7](./img/screen7.png)
![screen8](./img/screen8.png)

Następnie utworzoną grupe należy dodać do wszystkich trzech usług
![screen8](./img/screen9.png)
![screen8](./img/screen10.png)
![screen8](./img/screen11.png)

