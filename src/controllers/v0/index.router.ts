import { Router } from 'express';
import { CustomerRouter } from './customers/routes/customer.router';

const router: Router = Router();

router.use('/customer', CustomerRouter);

export const IndexRouter: Router = router;
