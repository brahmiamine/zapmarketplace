// Import the v4 function from the uuid module
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

// Generate a unique ID

export function handleExternalObject(orderInfo, userId) {
  const uniqueId = uuidv4();
  const obj = {
    adresse: orderInfo.user_info.address,
    client_code: userId, //not fund "email"
    code: uniqueId, // not fund
    date: moment().format("YYYY-MM-DD HH:mm:ss"), //not fund
    date_prevu_livraison: "", //not fund
    depot_code: "nomashop", //not fund
    montant_total_ht: 0,
    montant_total_ttc: orderInfo.subTotal,
    montant_total_tva: 0,
    net_a_payer: orderInfo.total,
    remise: orderInfo.discount,
    societe_code: "1",
    soussociete_code: "1",
    type: "commande",
    user_code: "nomashop",
  };

  const lignes = orderInfo.cart.map((item) => {
    return {
      produit_code: item.productId,
      entetecommercial_code: uniqueId,
      netAPayer: item.price,
      netAPayer_ht: 0,
      pu_ht: item.prices.price,
      pu_ttc: item.prices.price,
      quantite: item.quantity,
      remise: item.prices.discount,
      total: item.itemTotal,
      total_ht: "0",
      type: "vente",
    };
  });
  const newObject = {
    ...obj,
    lignes,
  };
  return newObject;
}
