const ProxyAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [
      {
        internalType: "contract IPRBProxyRegistry",
        name: "registry",
        type: "address",
      },
      { internalType: "address", name: "caller", type: "address" },
    ],
    name: "PRBProxy_CallerNotRegistry",
    type: "error",
  },
  { inputs: [], name: "PRBProxy_ExecutionReverted", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "caller", type: "address" },
      { internalType: "address", name: "target", type: "address" },
    ],
    name: "PRBProxy_ExecutionUnauthorized",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "caller", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes4", name: "method", type: "bytes4" },
    ],
    name: "PRBProxy_PluginNotInstalledForMethod",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
    ],
    name: "PRBProxy_PluginReverted",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "PRBProxy_TargetNotContract",
    type: "error",
  },
  { inputs: [], name: "PRBProxy_TargetRegistry", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    name: "Execute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IPRBProxyPlugin",
        name: "plugin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    name: "RunPlugin",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [
      { internalType: "address", name: "target", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "execute",
    outputs: [{ internalType: "bytes", name: "response", type: "bytes" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract IPRBProxyRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
export default ProxyAbi;
