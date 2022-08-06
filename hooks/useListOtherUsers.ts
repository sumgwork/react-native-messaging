import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { listUsers } from "../src/graphql/queries";
import { User } from "../types";

const useListOtherUsers = () => {
  const [contacts, setContacts] = useState<User[]>([]);
  useEffect(() => {
    async function getAllUsers() {
      const userListData = await API.graphql<any>(graphqlOperation(listUsers));
      const userList = userListData.data?.listUsers.items;

      // obtain current user id so it could be filtered out from all user list
      const currentUser = await Auth.currentAuthenticatedUser();
      const currentUserId = currentUser?.attributes?.sub;

      setContacts(
        userList?.length
          ? (userList.filter(
              (user: User) => user.id !== currentUserId
            ) as User[])
          : []
      );
    }
    getAllUsers();
  }, []);

  return contacts;
};

export default useListOtherUsers;
