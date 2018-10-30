import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x08bdF192C9f401ec261fF11f2C9e8f60ccfa3c2D"
);

export default instance;
