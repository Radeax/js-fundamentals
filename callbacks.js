// function orderSupplies(item, callback) {
//   let warehouse; //undefined
//   const deliveryTime = Math.random() * 3000;
//   setTimeout(() => {
//     warehouse = {
//       paint: {
//         product: 'Neon Green Paint',
//         directions: () => 'mix it!'
//       },
//       brush: {
//         product: 'Horsehair brush',
//         directions: () => 'start painting!'
//       }
//     };
//     callback(warehouse[item]);
//   }, deliveryTime);
// }
// function receivedItem(item) {
//   console.log(`Received ${item.product}, time to ${item.directions()}`);
// }
// orderSupplies('brush', receivedItem);
// orderSupplies('paint', receivedItem);

// Guarantee the order is always paint then brush

function orderSupplies(item, callback) {
  let warehouse; //undefined
  let deliveryTime = 1000;
  warehouse = {
    paint: {
      product: 'Neon Green Paint',
      directions: () => 'mix it!',
      order: 1
    },
    brush: {
      product: 'Horsehair brush',
      directions: () => 'start painting!',
      order: 2
    }
  };
  deliveryTime *= warehouse[item].order;
  setTimeout(() => { callback(warehouse[item]); }, deliveryTime);
}
function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}
orderSupplies('brush', receivedItem);
orderSupplies('paint', receivedItem);