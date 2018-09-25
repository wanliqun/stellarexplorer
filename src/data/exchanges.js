import {centralized, decentralized} from './exchanges.json'
import directory from '../data/directory'

const apayLogo = directory.anchors['tigerchange.org'].logo
 

decentralized.PapayaBot.logo = apayLogo
decentralized.PapayaSwap.logo = apayLogo
 

export {decentralized, centralized}
