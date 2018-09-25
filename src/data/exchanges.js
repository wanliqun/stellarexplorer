import {centralized, decentralized} from './exchanges.json'
import directory from '../data/directory'

const apayLogo = directory.anchors['apay.io'].logo
 

decentralized.PapayaBot.logo = apayLogo
decentralized.PapayaSwap.logo = apayLogo
 

export {decentralized, centralized}
