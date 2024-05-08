import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";
import CustomerRepositoryInterface from "../../domain/repository/customer.repository.interface";
import CustomerModel from "../db/sequelize/model/customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {
    async create(entity: Customer): Promise<void> {
        await CustomerModel.create({
            street: entity.Address.street,
            city: entity.Address.city,
            zipcode: entity.Address.zip,
            active: entity.isActive(),
            rewardPoints: entity.rewardPoints
        })
    }
    async update(entity: Customer): Promise<void> {
        await CustomerModel.update({
            name: entity.name,
            street: entity.Address.street,
            city: entity.Address.city,
            zipcode: entity.Address.zip,
            active: entity.isActive(),
            rewardPoints: entity.rewardPoints
        }, {
            where: {
                id: entity.id
            }
        })
    }
    async find(id: string): Promise<Customer> {
        let customerModel;
        try {
            customerModel = await CustomerModel.findOne({
                where: {
                    id
                },
                rejectOnEmpty: true
            })
        } catch (e) {
            throw new Error('Customer not found');
        }

        const customer = new Customer(id, customerModel.name);
        const address = new Address(
            customerModel.street,
            customerModel.number,
            customerModel.city,
            customerModel.zipcode,
        );
        customer.changeAddress(address);
        return customer;
    }

    async findAll(): Promise<Customer[]> {
        const customerModels = await CustomerModel.findAll();
        const customers = customerModels.map(customerModel => {
            let customer = new Customer(customerModel.id, customerModel.name);
            customer.addRewardPoints(customerModel.rewardPoints);
            const address = new Address(
                customerModel.street,
                customerModel.number,
                customerModel.city,
                customerModel.zipcode,
            );
            customer.changeAddress(address);

            if (customerModel.active) {
                customer.activate();
            }
            return customer;
        });
        return customers;
    }
}