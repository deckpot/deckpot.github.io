const tokenABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "airdropActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "airdropIndex",
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
		"inputs": [],
		"name": "airdropSize",
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
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "airdropTaken",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimAirdrop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
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
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "glare",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "newOwner",
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
		"name": "owner",
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
		"inputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setAirdropActive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "setAirdropIndex",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setAirdropSize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_glare",
				"type": "address"
			}
		],
		"name": "setGlare",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const tokenAddr = "0x39731Cb7727250bc42b7b72055934e8b3eeAc3b4";

const glareABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "accountCD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "created",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "contractDurration",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "closed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyMinimum",
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
		"inputs": [],
		"name": "buyTax",
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
				"internalType": "address",
				"name": "inputrefer",
				"type": "address"
			}
		],
		"name": "buyTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cdDurrationMax",
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
		"inputs": [],
		"name": "cdGLXMin",
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
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "closeCD",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "earlyPenalty",
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
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getAccountCDLength",
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
		"inputs": [],
		"name": "getTokenBuyResult",
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "getTokenSellResult",
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
		"inputs": [],
		"name": "glaretoken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "masternode",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "newOwner",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "durration",
				"type": "uint256"
			}
		],
		"name": "openCD",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "referBook",
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
		"name": "referRate",
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
		"inputs": [],
		"name": "referRateMasternode",
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
		"inputs": [],
		"name": "scalefactor",
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
		"inputs": [],
		"name": "sellMinimum",
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "sellTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "setBuyMinimum",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "durration",
				"type": "uint256"
			}
		],
		"name": "setCdDurrationMax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setCdGLXMin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_glaretoken",
				"type": "address"
			}
		],
		"name": "setGlareToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setMasternode",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "setSellMinimum",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "spotprice",
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
		"inputs": [],
		"name": "tokenTime",
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
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
const glareAddr = "0x845D6a8401f467852dd27802ad5803E12E17fE9F";

const zeroAddr = "0x0000000000000000000000000000000000000000";

let infuranode;

let tkn;
let glx;

let glxData = {};

let walletData = {};
let web3;
let glarePrivate;
let tknPrivate;

let refer;

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$('#accountCDTable').bootstrapTable({});

$(document).ready(function() {

	$('body').addClass('loaded');

});

window.onload = function load() {

	infuranode = new web3js.myweb3("https://mainnet.infura.io/v3/6a88050e75784b3abc8365912b2ea85a");
	tkn = new infuranode.eth.Contract(tokenABI, tokenAddr);
	glx = new infuranode.eth.Contract(glareABI, glareAddr);
	loadStats();

	var match,
	pl     = /\+/g,  // Regex for replacing addition symbol with a space
	search = /([^&=]+)=?([^&]*)/g,
	decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
	query  = window.location.search.substring(1);

	let urlParams = {};
	while (match = search.exec(query))
	urlParams[decode(match[1])] = decode(match[2]);

	if(urlParams.ref === undefined) {
		urlParams.ref = zeroAddr;
	}
	if(infuranode.utils.isAddress(urlParams.ref) == false) {
		urlParams.ref = zeroAddr;
	}
	refer = infuranode.utils.toChecksumAddress(urlParams.ref);
}

const loadStats = async() => {
	let a = glx.methods.spotprice().call().then();
	let b = tkn.methods.totalSupply().call().then();
	let c = infuranode.eth.getBalance(glareAddr).then();
	let d = tkn.methods.balanceOf(glareAddr).call().then();
	let e = glx.methods.tokenTime().call().then();

	let results = await Promise.all([a, b, c, d, e]);

	glxData.glxToEth = results[0] / 1e18;
	glxData.tsup = results[1] / 1e18;
	glxData.gbal = results[2] / 1e18;
	glxData.cdtotal = results[3] / 1e18;
	glxData.glareTime = results[4];

	glxData.cdreturn = glxData.cdtotal / glxData.glareTime * 1e5;

	document.getElementById('glxToEth').innerHTML = Math.round((glxData.glxToEth)*100000)/100000;
	document.getElementById('tsup').innerHTML = Math.round((glxData.tsup)*100)/100;
	document.getElementById('gbal').innerHTML = Math.round((glxData.gbal)*1000)/1000;
	document.getElementById('glareInCD').innerHTML = Math.round((glxData.cdtotal)*100)/100;
	document.getElementById('glareTime').innerHTML = glxData.glareTime / 1e5;
	document.getElementById('cdReturn').innerHTML = Math.round((100 * glxData.cdreturn)*100)/100;
}

const loadPrivateStats = async() => {
	let a = tkn.methods.balanceOf(walletData.addr).call().then();
	let b = glarePrivate.methods.getAccountCDLength(walletData.addr).call().then();
	let results = await Promise.all([a, b]);
	walletData.balance = results[0] / 1e18;
	walletData.cdlength = results[1];

	document.getElementById('displayGlareBalance').innerHTML = Math.round((walletData.balance)*100)/100;
	document.getElementById('displayGlareEth').innerHTML = Math.round((walletData.balance * glxData.glxToEth)*100)/100;

	let z = [];

	for(var i = 0; i < walletData.cdlength; i++) {
		z.push(glarePrivate.methods.accountCD(walletData.addr, i).call().then());
	}
	let accountCDPromise = await Promise.all(z);
	let loaddata = [];
	let index = 0;
	let currentTime = new Date().getTime();
	accountCDPromise.map(x => {
		if(x.closed == false) {
			var closeTime = (Number(x.created) + Number(x.contractDurration) * 60 * 60* 24) * 1e3
			var tmpBtn;
			if(closeTime < currentTime) {
				tmpBtn = '<a class="genric-btn primary-border radius small mx-auto" type="button" onclick="closeCD('+index+')">Close</a>';
			}
			else {
				tmpBtn = '<a class="genric-btn danger-border radius small mx-auto" type="button" onclick="closeCDEarly('+index+')">Close</a>';
			}

			loaddata.push({
				id: index,
				size: Math.round((x.tokenAmount / 1e18)*100)/100 + "&nbspGLX",
				term: x.contractDurration + "&nbspdays",
				value: Math.round((glxData.cdreturn * x.contractDurration * x.tokenAmount / 1e18)*100)/100 + "&nbspGLX",
				closeTime: new Date(closeTime).toLocaleString(),
				closeTimeMS: closeTime,
				action: tmpBtn
			});
			index++;
		}

	});

	loaddata.sort((a, b) => parseFloat(a.closeTimeMS) - parseFloat(b.closeTimeMS));
	$('#accountCDTable').bootstrapTable('load', loaddata);
}

const updateBuyToken = () => {
	let eth = Number(document.getElementById("ethToSpend").value);
	document.getElementById("outputGlare").innerHTML = Math.round((calcBuyToken(eth)*.9)*100)/100;
}

const calcBuyToken = (eth) => {
	let _ethnew = eth + glxData.gbal;
	let _snew = (_ethnew * 2 /1e-6)**(.5);
	let _sout = _snew - glxData.tsup;
	return(_sout);
}

const updateSellToken = () => {
	let glx = Number(document.getElementById("glxToSpend").value);
	document.getElementById("outputEthereum").innerHTML = Math.round((calcSellToken(glx))*1000)/1000;
}

const calcSellToken = (glx) => {
	let _snew = glxData.tsup - glx;
	let _ethnew = (_snew**2)*1e-6/2;
	let _ethout = glxData.gbal - _ethnew;
	return(_ethout);
}

const updateCDDays = () => {
	let glxToLock = Number(document.getElementById("glxToLock").value);
	let daysToLock = Number(document.getElementById("daysToLock").value);
	document.getElementById("displayGLXDays").innerHTML = glxToLock * daysToLock;
}

const updateRef = () => {
	document.getElementById('referralAddress').setAttribute("value", walletData.addr);
	let tmp = document.getElementById("referralAddress").value;
	if(infuranode.utils.isAddress(tmp)){
		tmp = infuranode.utils.toChecksumAddress(tmp);
		document.getElementById("referralURL").setAttribute("value","https://glarex.co/?ref=" + tmp);
		document.getElementById("tweetRef").setAttribute("href",
			"https://twitter.com/intent/tweet?text=Check+out+the+newest+Ethereum+DeFi+token+Glare%21+A+token+fully+backed+by+Ethereum+with+100%25+liquidity.+Visit+the+link+below+to+claim+the+limited+airdrop+and+buy+tokens%21+%23airdrop+%23crypto+%23glare+%24glx+https%3A%2F%2Fglarex.co%2F%3Fref%3D" + tmp);
		document.getElementById("tweetRefAirdrop").setAttribute("href",
			"https://twitter.com/intent/tweet?text=Check+out+the+newest+Ethereum+DeFi+token+Glare%21+A+token+fully+backed+by+Ethereum+with+100%25+liquidity.+Visit+the+link+below+to+claim+the+limited+airdrop+and+buy+tokens%21+%23airdrop+%23crypto+%23glare+%24glx+https%3A%2F%2Fglarex.co%2F%3Fref%3D" + tmp);

	}
}

const buyTokens = async () => {
	let result = await connectWallet();
	if(document.getElementById("ethToSpend").value >= .01){
		if(result == true) {
			let userbalance =  await web3.eth.getBalance(walletData.addr);
			userbalance = web3.utils.toHex(userbalance);
			let eth = Number(document.getElementById("ethToSpend").value)*1e18;
			eth = web3.utils.toHex(eth);
			if(Number(web3.utils.hexToNumberString(userbalance)) >= Number(web3.utils.hexToNumberString(eth))) {
				glarePrivate.methods.buyTokens(refer).send({from: walletData.addr, value: eth, gas: 250000}, (err, res) => {
					if(!err) console.log(res);
					else console.log(err);
				});
			}
		}
		else if(result == false){
			console.log("fuck");
		}
	}
	else {
		alert("You must buy .01 ETH or more.");
	}
}

const sellTokens = async () => {
	if(calcSellToken(document.getElementById("glxToSpend").value) >= .01) {
		let result = await connectWallet();
		if(result == true) {
			let userbalance = await tkn.methods.balanceOf(walletData.addr).call();
			userbalance = web3.utils.toHex(userbalance);
			let glare = web3.utils.toHex((document.getElementById("glxToSpend").value * 1e18).toLocaleString('fullwide', {useGrouping:false}));
			if(Number(web3.utils.hexToNumberString(userbalance)) >= Number(web3.utils.hexToNumberString(glare))) {
				glarePrivate.methods.sellTokens(glare).send({from: walletData.addr, gas: 500000}, (err, res) => {
					if(!err) console.log(res);
					else console.log(err);
				});
			}
		}
		else if(result == false){placeholder="1 GLX"
			console.log("fuck");
		}
	}
	else {
		alert("You must sell at least .01 ETH or more worth of GLX.");
	}

}

const openCD = async () => {
	let glxToLock = Number(document.getElementById("glxToLock").value);
	let daysToLock = Number(document.getElementById("daysToLock").value);
	if(glxToLock >= .1 && daysToLock > 0 && daysToLock <= 365) {
		let result = await connectWallet();

		if(result == true) {
			let glare = glxToLock*1e18;
			let userbalance = await tkn.methods.balanceOf(walletData.addr).call();
			if(Number(userbalance) >= glare) {
				let allowance = await tknPrivate.methods.allowance(walletData.addr, glareAddr).call().then();
				if(allowance >= glare) {
					glare = web3.utils.numberToHex(glare);
					daysToLock = web3.utils.numberToHex(daysToLock);
					glarePrivate.methods.openCD(glare, daysToLock).send({from: walletData.addr, gas: 500000}, (err, res) => {
						if(!err) console.log(res);
						else console.log(err);
					});
				}
				else {
					$('#approveModal').modal('show');
					approve();
				}
			}
		}
		else if(result == false){
			console.log("fuck");
		}
	}

}

const closeCDEarly = async(id) => {
	$('#warnModal').modal('show');
	document.getElementById("warnApprove").setAttribute("onclick", "closeCD("+id+")");
}

const closeCD = async(id) => {
	glarePrivate.methods.closeCD(id).send({from: walletData.addr, gas: 500000}, (err, res) => {
		if(!err) console.log(res);
		else console.log(err);
	});
}

const claimAirdrop = async() => {
	let result = await connectWallet();
	let claimed = await tknPrivate.methods.airdropTaken(0, walletData.addr).call().then();
	if(result == true && claimed == false) {
		tknPrivate.methods.claimAirdrop().send({from: walletData.addr, gas: 100000}, (err, res) => {
			if(!err) console.log(res);
			else console.log(err);
		});
	}
}

const maxSell = () => {
	if (walletData.balance !== undefined || walletData.balance > 0) {
		document.getElementById("glxToSpend").value = walletData.balance;
		updateSellToken();
	}
}

const connectWallet = async () => {
	try {
		web3 = new web3js.myweb3(window.ethereum);
		glarePrivate = new web3.eth.Contract(glareABI, glareAddr);
		tknPrivate = new web3.eth.Contract(tokenABI, tokenAddr);
		let a = await ethereum.enable();
		walletData.addr = web3.utils.toChecksumAddress(a[0]);
		document.getElementById("connectbtn").innerHTML = shortaddr(walletData.addr);
		updateRef();
		loadPrivateStats();
		return(true);
	} catch (error) {

		$('#connectModal').modal('show');

		if (error.code === 4001) {
			console.log('Please connect to MetaMask.');
			return(false);
		} else {
			console.error(error);
			return(false);
		}
	}
}

const approve = async() => {
	let result = await connectWallet();
	if(result == true) {
		tknPrivate.methods.approve(glareAddr, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').send({from: walletData.addr, gas: 50000}, (err, hash) => {
			if(err) {
				console.log(err);
			}
			else {
				console.log(hash);
			}
		});
	}

}

const shortaddr = addr => {
  return(addr.replace(addr.slice(5, 39), ".."));
}

function copyToClipboard(id) {
		var text = document.getElementById(id).value; //getting the text from that particular Row
		//window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
		if (window.clipboardData && window.clipboardData.setData) {
				// IE specific code path to prevent textarea being shown while dialog is visible.
				return clipboardData.setData("Text", text);

		} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
				var textarea = document.createElement("textarea");
				textarea.textContent = text;
				textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
				document.body.appendChild(textarea);
				textarea.select();
				try {
						return document.execCommand("copy");  // Security exception may be thrown by some browsers.
				} catch (ex) {
						console.warn("Copy to clipboard failed.", ex);
						return false;
				} finally {
						document.body.removeChild(textarea);
				}
		}
	}

	const detectAddress = async () => {
		let result = await connectWallet();
		if(result == true) {
			updateRef();
		}
	}
