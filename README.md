# FibCalc Rafał Baliński

Projekt fibcalc jest zmodyfikowaną wersją aplikacji z
zajęc laboratoryjnych "Programowanie Full Stack w
Chumrze Obliczeniowej". Zmianie uległa część Frontendowa (kliencka)
aplikacji. Została ona napisana od postaw w Angularze w wersji 14.2.10.

Aplikacja będzie dostępna po tym [linkiem](http://rbmultifib-env.eba-ntaaqh2z.us-east-1.elasticbeanstalk.com/calculator)
do dnia 29.01.2023. Potem zostanie usunięta

Obrazy aplikacji dostępne są na platformie docker hub pod tym [linkiem](https://hub.docker.com/r/rafalbalinski/fullstack). Można je także pobrać wykonując komendę <br>
`docker pull rafalbalinski/fullstack`

## Zrzuty ekranowe aplikacji
Ponieżej przedstawiony jest widok kalkulatora
![screen13](./img/screen13.png)

Drugi screen przedstawia widok z danymi autora
![screen14](./img/screen14.png)


## Tworzenie bazy danych PostgreSQL za pomocą usługi RDS
Poniższy screen prezentuje zastosowane ustawienia przy tworzeniu bazy danych PostgreSQL
![screen1](./img/screen1.png)

Jak widać instancja bazy została poprawnie utworzona oraz działa, co wskazuje status **Available**
![screen2](./img/screen2.png)


## Tworzenie bazy danych Redis za pomocą usługi ElastiCache
Poniższy screeny prezentują zastosowane ustawienia przy tworzeniu bazy danych Redis
![screen3](./img/screen3.png)
![screen4](./img/screen4.png)
![screen5](./img/screen5.png)

Jak widać instancja bazy została poprawnie utworzona oraz działa, co wskazuje status **Available**
![screen6](./img/screen6.png)

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

## Tworzenie usługi Elastic Beanstalk
Po uprzednim utworzeniu środowiska w usłudzie Elastic Beanstalk, należy je skonfigurować
dodając zmienne używane w kodzie aplikacji. Konfigurację tych zmiennych
ilustruje poniższy screen:
![screen8](./img/screen12.png)

