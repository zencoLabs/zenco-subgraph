import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";

export const TRADERHELPER = "0xea99a2a055e0ae4d5d5d5a7c7f6819e1eb2bed23";
export const BI_ZERO = BigInt.fromI32(0);
export const BI_ONE = BigInt.fromI32(1);
export const BI_WAD = BigInt.fromI32(10).pow(18);

export const BD_ZERO = BigDecimal.fromString("0");
export const BD_WAD = BigDecimal.fromString(BI_WAD.toString());

export const DEFAULT_DECIMALS = BigInt.fromI32(18);
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export function fromWei(value: BigInt, decimals: u8 = 18): BigDecimal {
  return value.toBigDecimal().div(
    BigInt.fromI32(10)
      .pow(decimals)
      .toBigDecimal()
  );
}
