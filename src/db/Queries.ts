import { Insert, Select, labseven } from "./schema";
import { pscale } from "./pscale";

export async function SelectUsers(): Promise<Select[]> {
  const usersData = await pscale.select().from(labseven);
  return usersData;
}

export async function InsertUsers(props: Insert) {
  const insertedUsersData = await pscale
    .insert(labseven)
    .values(props)
    .execute();
  return insertedUsersData;
}
