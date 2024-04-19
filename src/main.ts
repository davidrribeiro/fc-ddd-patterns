import Address from "./entity/address";
import Customer from "./entity/customer";

let customer = new Customer("123", "David Ribeiro");
const address = new Address("Rua 1", "Cidade 1", "Estado 1", "12345-678", "País 1");
customer.Address = address;
customer.activate();
