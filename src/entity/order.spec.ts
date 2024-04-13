import Order from "./order";
import OrderItem from "./order_item";

describe('Order unit test', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let order = new Order("", "123", [], 0);

        }).toThrowError("ID is required");
    })

    it('should thorw error when customer id is empty', () => {
        expect(() => {
            let order = new Order("123", "", [], 0);
        }).toThrowError("Customer ID is required");
    })

    it('should thorw error when items is empty', () => {
        expect(() => {
            let order = new Order("123", "123", [], 0);
        }).toThrowError("Items are required");
    })

    it('should calculate total ', () => {
        const item = new OrderItem("1", "Item 1", 100);
        const item2 = new OrderItem("2", "Item 2", 200);
        const order = new Order("123", "c123", [item], 0);

        let total = order.total();


        expect(total).toBe(100);
        const order2 = new Order("123", "c123", [item, item2], 0);
        total = order2.total();
        expect(total).toBe(300);
    })


});