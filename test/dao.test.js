const {network,ethers}=require("hardhat");
async function moveBlocks(number) {
    console.log('Moving blocks...')
    for (let index=0; index<number; index++){
        await network.provider.request({
            method:"evm_mine",
            params:[],            
        })
    }
    console.log("Moving blocks...")
    await network.provider.send("evm_increaseTime", [number])
}

async function moveTime(number) {
    console.log(`Moved ${number} blocks`)    
}

describe("DAO contact", function()){
    it("Testing Flow", async function() {
        const [deployer]=await ethers.getSigners();

        const GovToken=await ethers.deployContract("GovToken",[deployer]);

        const balance =await GovToken.balanceOf(deployer,address);

        console.log(`Deployer's balance: ${balance}`);


    });

});