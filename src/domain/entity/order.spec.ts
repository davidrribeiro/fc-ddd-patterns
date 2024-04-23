import Order from "./order";
import OrderItem from "./order_item";

describe('Order unit test', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let order = new Order("", "123", []);

        }).toThrow("ID is required");
    })

    it('should thorw error when customer id is empty', () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrow("Customer ID is required");
    })

    it('should thorw error when items is empty', () => {
        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrow("Items are required");
    })

    it('should calculate total ', () => {
        const item = new OrderItem("1", "p1", "Item 1", 100, 2);
        const item2 = new OrderItem("1", "p1", "Item 2", 200, 2);
        const order = new Order("123", "c123", [item]);

        let total = order.total();


        expect(total).toBe(200);
        const order2 = new Order("123", "c123", [item, item2]);
        total = order2.total();
        expect(total).toBe(600);
    })

    it('should throw error if the item quantity is less or equal zero ', () => {

        expect(() => {
            const item = new OrderItem("1", "p1", "Item 1", 100, 0);
            const order = new Order("123", "c123", [item]);
        }).toThrow("Quantity must be greater than zero");
    })


});