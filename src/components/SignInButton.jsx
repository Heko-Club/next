import {
  useAddress,
  // useNetworkMismatch,
  // useNetwork,
  useChain,
  useSwitchChain,
  ConnectWallet,
  ChainId,
  MediaRenderer,
} from "@thirdweb-dev/react";
import React from "react";
import useLensUser from "../lib/auth/useLensUser";
import useLogin from "../lib/auth/useLogin";



export default function SignInButton() {
  const address = useAddress(); // Detect the connected address
  // const isOnWrongNetwork = useNetworkMismatch(); // Detect if the user is on the wrong network
  // const [, switchNetwork] = useNetwork(); // Function to switch the network.
  const { isSignedInQuery, profileQuery } = useLensUser();
  const { mutate: requestLogin } = useLogin();
  const switchChain = useSwitchChain();
  const chain = useChain();

  // 1. User needs to connect their wallet
  if (!address) {
    return <ConnectWallet />;
  }
  if (!address) {
    return ("hello");
  }
  // 2. User needs to switch network to Polygon
  if (chain.chainId != ChainId.Polygon) {
    return (
      <button onClick={() => switchChain(ChainId.Polygon)}>
        Switch Network
      </button>
    );
  }

  // Loading their signed in state
  if (isSignedInQuery.isLoading) {
    return <div>Loading...</div>;
  }

  // If the user is not signed in, we need to request a login
  if (!isSignedInQuery.data) {
    return <button onClick={() => requestLogin()}>Sign in with Lens</button>;
  }

  // Loading their profile information
  if (profileQuery.isLoading) {
    return <div>Loading...</div>;
  }

  // If it's done loading and there's no default profile
  if (!profileQuery.data?.defaultProfile) {
    return <div>No Lens Profile.</div>;
  }

  // If it's done loading and there's a default profile
  if (profileQuery.data?.defaultProfile) {
    return (
      <div>
        <MediaRenderer
          // @ts-ignore
          src={profileQuery?.data?.defaultProfile?.picture?.original?.url || ""}
          alt={profileQuery.data.defaultProfile.name || ""}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
          }}
        />
      </div>
    );
  }

  return <div>Something went wrong.</div>;
}
