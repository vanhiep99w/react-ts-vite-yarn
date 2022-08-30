import { headlessConfig } from "@/configs";
import { convertAccount } from "@/helpers";
import { Pageable, Account } from "@/models";

const ACCOUNTS_BASE_URL = "headless-commerce-admin-account/v1.0/accounts/";

export const queryAccountsByName = async (
  name: string,
  pageQuery?: Pageable
): Promise<Account[]> => {
  const {
    data: { items }
  } = await headlessConfig.get(ACCOUNTS_BASE_URL, {
    params: {
      search: name,
      ...pageQuery
    }
  });
  return items.map((item: any) => convertAccount(item));
};
