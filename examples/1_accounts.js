const { ethers } = require("ethers")
const rpcURL = 'https://cloudflare-eth.com/'
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const address = '0x388C818CA8B9251b393131C08a736A67ccB19297'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(balance)
}

main()
