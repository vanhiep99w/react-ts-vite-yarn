import { Account } from "@/models";

/**
 * Convert input to Account object
 * @param input
 * @return Account
 */
export const convertAccount = (input: any): Account => {
  const { id, name, emailAddress } = input;
  return { id, name, emailAddress };
};
