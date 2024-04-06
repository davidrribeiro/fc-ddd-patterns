import Address from "./address";

export default class Customer {
    private _id: string;
    private _name: string = "";
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this._active = true;

        this.validate();
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get address(): Address {
        return this._address;
    }

    set Address(address: Address) {
        this._address = address;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changeAddress(address: Address) {
        this._address = address;

    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    isActive(): boolean {
        return this._active;
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

}