import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "David Ribeiro");
const address = new Address("Rua 1", "Cidade 1", "Estado 1", "12345-678", "País 1");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 100);
const item2 = new OrderItem("2", "Item 2", 200);
const order = new Order("1", "123", [item1, item2]);