/*
Challenge: JavaScript Library Project

Requirements:
1. Implement the following models: Book, Student, Admin, and LibraryApp.
2. Each model should have an id attribute along with other relevant attributes.
3. Each model's constructor should receive the database instance as the first parameter and it should be named `db`.
4. Each model should use the `db` parameter for querying by id or retrieving all saved entries, updating data, and saving data.
5. The InMemoryDatabase class should receive the name of the table and the required data to run queries, updates, or selects.
6. Use the InMemoryDatabase implementation provided for this challenge.

*/
class InMemoryDatabase {
  constructor() {
    this.tables = {};
    this.lastIds = {};
  }

  select(tableName) {
    if (this.tables[tableName]) {
      return this.tables[tableName];
    } else {
      return [];
    }
  }

  selectById(tableName, id) {
    const table = this.tables[tableName];
    if (table) {
      return table.find((entry) => entry.id === id) || null;
    } else {
      return null;
    }
  }

  update(tableName, id, data) {
    const table = this.tables[tableName];
    if (table) {
      const entry = table.find((entry) => entry.id === id);
      if (entry) {
        Object.assign(entry, data);
        return true;
      }
    }
    return false;
  }

  insert(tableName, data) {
    if (!this.tables[tableName]) {
      this.tables[tableName] = [];
      this.lastIds[tableName] = 0;
    }
    const nextId = this.lastIds[tableName] + 1;
    const entry = { id: nextId, ...data };
    this.tables[tableName].push(entry);
    console.log(entry);
    this.lastIds[tableName] = nextId;
    return nextId;
  }
}

let db = new InMemoryDatabase();
console.log(db);
console.log(db.select(1));
console.log(db.selectById(2));
console.log(db.update());
console.log(db.insert());