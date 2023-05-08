const fs = require("fs");
const crypto = require("crypto");
const util = require("util");

const scrypt = util.promisify(crypto.scrypt);

class userRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Create a repository requires a name");
    }

    this.filename = filename;

    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }
  async create(attrs) {
    attrs.id = this.generateId();

    const salt = crypto.randomBytes(8).toString("hex");
    const buf = await scrypt(attrs.password, salt, 64);
    const EncPass = {
      ...attrs,
      password: `${buf.toString("hex")}.${salt}`,
    };
    const records = await this.getAll();
    records.push(EncPass);

    await this.writeAll(records);

    return EncPass;
  }

  async comparePass(saved, supplied) {
    const [hashed, salt] = saved.split(".");
    const hashedSupp = await scrypt(supplied, salt, 64);

    return hashed === hashedSupp.toString("hex");
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }
  generateId() {
    return crypto.randomBytes(4).toString("hex");
  }
  async getById(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }
  async delete(id) {
    const record = await this.getAll();
    const filterRec = record.filter((record) => record.id !== id);
    await this.writeAll(filterRec);
  }
  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw new Error(`Sorry can't found any user with id:${id}`);
    }

    Object.assign(record, attrs);
    await this.writeAll(records);
  }
  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }
      if (found) {
        return record;
      }
    }
  }
}

module.exports = new userRepository("users.json");
