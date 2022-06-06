import { Sdk, Env, MetaMaskWalletProvider } from "etherspot";

// change default environment
Env.defaultName = "testnets";

export async function startSdk() {
  if (!MetaMaskWalletProvider.detect()) {
    console.log("MetaMask not detected");
    return;
  }

  const walletProvider = await MetaMaskWalletProvider.connect();
  const sdk = new Sdk(walletProvider);
  await sdk.syncAccount();
  return sdk;
}
