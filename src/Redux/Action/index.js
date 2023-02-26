import { type } from "@testing-library/user-event/dist/type";

export function showMagpiePoolContent() {
  return {
    type: "SHOWCONTENT",
  };
}

export function showWalletPopover() {
  return {
    type: "SHOWPOPOVER",
  };
}

export function connectedWalletName(id) {
  return {
    type: "CONNECTWALLET",
    id,
  };
}
export function auditAlertBox() {
  return {
    type: "AUDITBOX",
  };
}
export function auditClose() {
  return {
    type: "CLOSEAUDIT",
  };
}
export function selectWalletCLose() {
  return {
    type: "CLOSEWALLETBOX",
  };
}
export function diconnectWallet() {
  return {
    type: "DISCONNECTWALLET",
  };
}
export function showHeaderDropdown() {
  return {
    type: "DROPDOWNBOX",
  };
}
export function showLanguageBox() {
  return {
    type: "LANGUAGEBOX",
  };
}
export function closeHeaderDropdown() {
  return {
    type: "CLOSEHEADERBOX",
  };
}

export function closeLanguageDropdown() {
  return {
    type: "CLOSELANGUAGEBOX",
  };
}
