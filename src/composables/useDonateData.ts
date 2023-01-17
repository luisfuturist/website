import { computed } from "vue";

export function useDonateData() {
    const donateItems = computed(() => ({
        "Pix": {
            name: "Pix",
            key: "(47) 99921-6685",
        },
        "XNO": {
            name: "Nano",
            key: "nano_3ke34tcxrqz38s91dw8stxdoqodwffmar34txn7hh9tfbw9r4y6mxyz85iey",
        },
        "XMR": {
            name: "Monero",
            key:  "4A6M81P8WuKM26cMCcuRXSFKZsLcUEjWNYfCRErffw9qLguwMLcnNjdHNs8QDJAsg1J4zhTR9hkszMcg2duRAa5p76usJPM",
        },
        "BTC": {
            name: "Bitcoin",
            key: "1Bfrd9aRgtQXmoSoPaRpKqWa1YLFmgGXTw",
        },
        "ETH": {
            name: "Ether",
            key: "0x291AC43629ac7BFD514d0251aab6c1099B052571",
        },
    }));

    return {
        donateItems,
    };
}