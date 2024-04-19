import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
    it("should service unit test", () => {
        const item1 = new OrderItem("1", "p1", "product1", 100, 1);
        const item2 = new OrderItem("2", "p2", "product2", 200, 2);

        const order = new Order("o1", "c2", [item1]);
        const order2 = new Order("o2", "c2", [item2]);

        const total = OrderService.total([order, order2]);

        expect(total).toBe(500);
    })
});