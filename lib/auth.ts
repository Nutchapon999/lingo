import { auth } from "@clerk/nextjs";

const allowIds = [
  "user_2hAfGmTLUNJ7XpmtQPvvyWMUlfG",
]

export const isAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return allowIds.indexOf(userId) !== -1;
}