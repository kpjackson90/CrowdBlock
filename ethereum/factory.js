import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xfae8F49955f890B8833a90200c7b57dEe10e1E3d"
);

export default instance;
