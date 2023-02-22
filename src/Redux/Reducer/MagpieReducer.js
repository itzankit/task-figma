var INITIAL_STATE = {
  showContent: false,
  showWalletPopover: false,
  walletName: "",
  showAuditBox: false,
};

function magpieState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOWCONTENT":
      return { ...state, showContent: !state.showContent };
    case "SHOWPOPOVER":
      return { ...state, showWalletPopover: !state.showWalletPopover };
    case "CONNECTWALLET":
      return { ...state, walletName: action.id };
    case "AUDITBOX":
      return { ...state, showAuditBox: !state.showAuditBox };
    case "CLOSEAUDIT":
      return { ...state, showAuditBox: false };
    case "CLOSEWALLETBOX":
      return { ...state, showWalletPopover: false };
    case "DISCONNECTWALLET":
      return { ...state, walletName: "" };
    default:
      return state;
  }
}

export default magpieState;
