## Problemi riscontrati

### Le query sono scritte nelle rotte.

> Problema?

- Difficile riutilizzare le query in altri contesti.
- Bassa manutenibilità.

> Soluzione?

- [ ] Utilizzare un ORM (Object Relational Mapping). Così da poter scrivere query in modo più leggibile e riutilizzabile basandomi su oggetti e non su tabelle.
- [ ] Utilizzare un query builder basato sullo schema del database. Query flessibili e tendenzialmente più performanti, seppur meno manutenibili rispetto ad un ORM.

[Vai al file](./tips/db-1.js)

### Il database si connette ogni volta che la nostra applicazione parte.

> Problema?

- Bassa performance.
- Connessioni aperte inutilmente.

> Soluzione?

- [ ] Connettersi al database solo quando necessario. Ad esempio, quando si effettua una query.

[Vai al file](./tips/db-2.js)

### Adesso apro una connessione al database ad ogni richiesta.

> Problema?

- Bassa performance.
- Connessioni aperte e utilizzate in modo non efficiente.

> Soluzione?

- [ ] Adottare un singleton. Così da poter aprire una sola connessione e riutilizzarla ad ogni richiesta. [Vai al file](./tips/db-3.js)
- [ ] Utilizzare un pool di connessioni. Così da poter riutilizzare le connessioni già aperte e non doverle aprire ogni volta. [Vai al file](./tips/db-4.js)

### Qualcuno mi sta bombardando di richieste e il mio server non riesce a gestirle.

> Soluzione?

- [ ] Utilizzare un sistema di rate limiting. Così da poter limitare il numero di richieste che un utente può fare in un determinato intervallo di tempo. [Vai al file](./tips/rate-limiting.js)

### Ho una rotta che ogni tanto genera errori perché il servizio a cui si appoggia è down.

> Soluzione?

- [ ] Utilizzare un sistema di retry. Così da poter riprovare ad effettuare la richiesta in caso di errore. [Vai al file](./tips/retry.js)
- [ ] Utilizzare un sistema di circuit breaker. Così da poter evitare di effettuare richieste ad un servizio che sappiamo essere down. [Vai al file](./tips/circuit-breaker.js)
- [ ] Utilizzare un sistema di fallback. Così da poter restituire una risposta di default in caso di errore. [Vai al file](./tips/fallback.js)
- [ ] Utilizzare un sistema di cache. Così da poter restituire una risposta già calcolata in caso di errore. [Vai al file](./tips/cache.js)

### La rotta deve restituire tutti gli ordini ma impianta il server perché ci sono troppi ordini.

> Soluzione?

- [ ] Utilizzare la paginazione. Così da poter restituire solo una parte degli ordini per volta.
- [ ] Utilizzare un puntatore. Così da poter restituire solo gli ordini successivi a quello richiesto. `?cursor=1234567890`

### La rotta deve subire dei cambiamenti ma i miei clienti la stanno già utilizzando.

> Soluzione?

- [ ] Utilizzare un sistema di versioning. Così da poter mantenere la vecchia versione della rotta e creare una nuova versione con le modifiche richieste. Il problema qui è che bisogna mantenere due versioni della stessa rotta.
- [ ] Utilizzare un sistema di deprecation. Così da poter avvisare i clienti che la vecchia versione della rotta verrà rimossa. Bisogna trovare un buon modo di comunicare ai clienti che la vecchia versione verrà rimossa.
- [ ] Utilizzare un sistema di migration. Così da poter migrare i clienti dalla vecchia versione alla nuova versione della rotta. In questo caso la nuova versione della rotta deve essere compatibile con la vecchia versione oltre che con la nuova.
- [ ] GraphQL. Così da poter permettere ai clienti di richiedere solo i campi che gli interessano. In questo modo si possono aggiungere campi senza dover versionare la rotta. Questo porta con se altri problemi, come la sicurezza, le performance e la complessità.

### Come posso far usufruire ai miei clienti di una API potendoli autenticare?

> Soluzione?

- [ ] Utilizzare un sistema di autenticazione basato su token. Così da poter generare un token per ogni utente e farlo utilizzare per autenticarsi.
- [ ] Utilizzare un sistema di autenticazione basato su JWT. Così da poter generare un token contenente le informazioni dell'utente e farlo utilizzare per autenticarsi. [Vai al file](./tips/jwt.js)
- [ ] Basic Auth. Così da poter utilizzare un sistema di autenticazione basato su username e password.
