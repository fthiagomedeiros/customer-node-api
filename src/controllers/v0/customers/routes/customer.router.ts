import { Router, Request, Response } from 'express';
import { Customer } from '../models/Customer'

export const router: Router = Router();

const HTTP_OK = 200;
const HTTP_CREATED = 201;

router.post('/', async (request: Request, response: Response) => {

    const newCustomer = await new Customer({
        email: request.body.email,
        name: request.body.name
    });

    const newSavedCustomer = await newCustomer.save();

    response.status(HTTP_CREATED).send(newSavedCustomer);
});


router.post('/send_email', async (request: Request, response: Response) => {
    const email = request.body.email;

    let customer;
    customer = await Customer.findByPk(email);
    // tslint:disable-next-line:no-console
    console.log('An email must be sent!' + customer);

    response.send(customer);
});



router.get('/', async (request: Request, response: Response) => {
    const customers = await Customer.findAndCountAll({order: [['email', 'DESC']]})
    response.status(HTTP_OK).send(customers);
});

export const CustomerRouter: Router = router;
