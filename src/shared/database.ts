import {
  DEBUG,
  enablePromise,
  openDatabase,
} from 'react-native-sqlite-storage'

DEBUG(true) // TODO 环境区分是否启动DEBUG
enablePromise(true)

export async function initDB() {
  const db = await getDBConnection()
  const sql = `
create table if not exists account(
id ini not null auto_increment primary key,
name varchar(255) not null,
balance int not null,
notes varchar(255)
);
`
  await db.executeSql(sql)
}

export function getDBConnection() {
  return openDatabase({
    name: 'database.db',
    createFromLocation: '/data/MomoLedger/database.sqlite',
  })
}
