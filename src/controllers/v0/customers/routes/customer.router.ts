import { Router, Request, Response } from 'express';
import { Customer } from '../models/Customer'

export const router: Router = Router();

router.post('/', async (request: Request, response: Response) => {

    const newCustomer = await new Customer({
        email: request.body.email,
        name: request.body.name
    });

    const newSavedCustomer = await newCustomer.save();

    response.status(201).send(newSavedCustomer);
});

export const CustomerRouter: Router = router;
