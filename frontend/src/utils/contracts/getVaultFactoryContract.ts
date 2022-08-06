// TODO import from smartcontracts/artifacts folder?
import VaultFactory from "../../smartcontracts/VaultFactory.json"
import { Contract, ethers } from "ethers";
import isAddress from "../isAddress";

// TODO use typechain type?
const getVaultFactoryContract = (): Contract => {
  const address = process.env.REACT_APP_VAULT_FACTORY_CONTRACT_ADDRESS || ''
  if (!isAddress(address)) {
    throw new Error(`${address} is not a valid contract address`)
  }

  // NOTE: signer not (yet) connected
  return new ethers.Contract(address, VaultFactory.abi)
}

export default getVaultFactoryContract;
