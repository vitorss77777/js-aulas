// Abrindo um banco de dados IndexedDB
const request = indexedDB.open("ClienteDB", 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;

  // Criando a loja de objetos 'clientes' com chave primária 'id'
  const store = db.createObjectStore("clientes", { keyPath: "id" });

  // Criando índices para 'nome' e 'email'
  store.createIndex("nome", "nome", { unique: false });
  store.createIndex("email", "email", { unique: true });
};

request.onsuccess = function(event) {
  const db = event.target.result;

  // Verificando se o cliente já existe para evitar duplicatas
  const transaction = db.transaction("clientes", "readwrite");
  const store = transaction.objectStore("clientes");
  const index = store.index("email");
  const emailIndex = index.get("maria@gmail.com");

  emailIndex.onsuccess = function() {
    if (!emailIndex.result) {
      // Adicionando um novo cliente
      const addRequest = store.add({
        id: 1,
        nome: "Maria Eduarda",
        email: "maria@gmail.com"
      });

      addRequest.onsuccess = function() {
        console.log("Cliente adicionado com sucesso!");
      };

      addRequest.onerror = function() {
        console.error("Erro ao adicionar cliente:", addRequest.error);
      };
    } else {
      console.log("Cliente com esse email já existe.");
    }
  };

  emailIndex.onerror = function() {
    console.error("Erro ao verificar cliente pelo email:", emailIndex.error);
  };
};

request.onerror = function(event) {
  console.error("Erro ao abrir o banco de dados:", event.target.error);
};
