import { Account } from "@/entities/Account";
import { headlessConfig } from "@/configs/headlessConfig";

const ACCOUNTS_BASE_URL = "headless-commerce-admin-account/v1.0/accounts/";

export const queryAccountsByName = async (name: string): Promise<Account[]> => {
  const rest = await headlessConfig.get(ACCOUNTS_BASE_URL, {
    params: {
      search: name
    }
  });

  return rest.data;
};
