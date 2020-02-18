import {Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt} from "sequelize-typescript";


@Table
export class Customer extends Model<Customer> {

    @PrimaryKey
    @Column
    public email!: string;

    @Column
    public name!: string;

    @Column
    @CreatedAt
    public createdAt: Date = new Date();

    @Column
    @UpdatedAt
    public updatedAt: Date = new Date();

}
