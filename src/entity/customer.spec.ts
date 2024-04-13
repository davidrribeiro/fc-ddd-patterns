import Address from "./address";
import Customer from "./customer";

describe('Customer unit test', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let customer = new Customer("", "John Doe");

        }).toThrowError("ID is required");
    })

    it('should throw error when name is empty', () => {
        expect(() => {
            let customer = new Customer("123", "");

        }).toThrowError("Name is required");
    })

    it('should change name', () => {
        const customer = new Customer("123", "John Doe");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    })

    it('should activate customer', () => {
        const customer = new Customer("123", "John Doe");
        const address = new Address("Rua 1", "Floriano", "PI", "123", "Brasil");
        customer.Address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    })

    it('should deactivate customer', () => {
        const customer = new Customer("123", "John Doe");

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    })


    it('should throw error when address is undefined', () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");

    })
});