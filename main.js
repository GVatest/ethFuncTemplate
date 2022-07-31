import { ethers } from 'ethers'

// Notifications
import { toast } from 'wc-toast';

export const errorMsg = (msg) => {
  toast.error(msg);
};

export const success = (msg) => {
  toast.success(msg, {duration: 4000});
};

// Setup
ERC20_ABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_time",
          "type": "uint256"
        }
      ],
      "name": "newLock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_mapIter",
          "type": "uint256"
        }
      ],
      "name": "newUnlock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "addressMap",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mapIter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "numMap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "timeMap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenMap",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]
const contractAddress = '0xDA624bA6c18C935213d4377995bB7d334c2fBF93'
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
setSigner(signer)
const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider.getSigner())

// Сall smart contract
const newLock = async (value, token, beneficiary, time) => {
    try {
      const daiWithSigner = contract.connect(signer)
      await daiWithSigner
      .newLock(value, token, beneficiary, time)
      .then((name) => success(name))
      .catch((e) => {console.log(e); errorMsg("Transaction failed")})
    } catch (e) {
      console.log(e)
      errorMsg("Transaction failed to send")
    }
}