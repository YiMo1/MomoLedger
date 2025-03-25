import {
  DEBUG,
  type SQLiteDatabase,
  enablePromise, openDatabase,
} from 'react-native-sqlite-storage'

DEBUG(true) // TODO 环境区分是否启动DEBUG
enablePromise(true)

let DB: SQLiteDatabase

export async function initDB() {
  DB = await openDatabase({
    name: 'database.db',
    createFromLocation: '/data/MomoLedger/database.sqlite',
  })
  const sql = `
create table if not exists account(
id ini not null auto_increment primary key,
name varchar(255) not null,
balance int not null,
notes varchar(255)
);
`
  await DB.executeSql(sql)
}

export function getDB() {
  return DB
}

export type Account = {
  id: number
  name: string
  balance: number
  notes?: string
}
export async function createAccount({ name, balance, notes }: Omit<Account, 'id'>) {
  const sql = 'insert into account(name,balance,notes) values(?,?,?);'
  const res = await DB.executeSql(sql, [name, balance, notes])
  return res[0]
}
