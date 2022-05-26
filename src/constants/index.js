export const transactionExample = {
  from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  gas: "0x76c0", // 30400
  gasPrice: "0x9184e72a000", // 10000000000000
  value: "0x9184e72a", // 2441406250
  data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
};

export const headers = [
  {
    text: "Hash",
    value: "hash",
    sort: true,
  },
  {
    text: "From",
    value: "from",
    sort: false,
  },
  {
    text: "To",
    value: "to",
    sort: true,
  },
  {
    text: "Value",
    value: "value",
    sort: true,
  },
];

export const body = [
  {
    hash: 27,
    to: 1,
    from: 0,
    value: 10,
  },
  {
    hash: 1,
    to: 0,
    from: 0,
    value: 10,
  },
  {
    hash: 2,
    to: 1,
    from: 0,
    value: 10,
  },
  {
    hash: 3,
    to: 3,
    from: 0,
    value: 10,
  },
  {
    hash: 4,
    to: 4,
    from: 0,
    value: 10,
  },
];
