import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { getRandomImage } from "../data/userImages";
import { createUser } from "../src/graphql/mutations";
import { getUser } from "../src/graphql/queries";

const useUserAuth = () => {
  useEffect(() => {
    async function fetchUser() {
      // get authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      // get user details from cognito with user id
      const userData = await API.graphql(
        graphqlOperation(getUser, { id: userInfo.attributes.sub })
      );
      // @ts-ignore
      if (userData.data.getUser) {
        return;
      }
      // if there is no user, create one
      const newUser = {
        id: userInfo.attributes.sub,
        name: userInfo.username,
        imageUri: getRandomImage(),
        status: "Hi, I am using WhatsApp",
      };

      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    }
    fetchUser();
  }, []);
};

export default useUserAuth;
