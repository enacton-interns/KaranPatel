import express from 'express';
import { getAllProvider, getProviderById, updateProvider, deleteProvider, createProvider} from '../controllers/serviceProvider.Controller.js';

const router = express.Router();

// POST /api/service-providers/create
router.post('/service-providers', createProvider);

// // GET /api/service-providers
// router.get('/', getAllProvider);

// // GET /api/service-providers/:id
// router.get('/:id', getProviderById);

// // PUT /api/service-providers/:id
// router.put('/:id', updateProvider);

// // DELETE /api/service-providers/:id
// router.delete('/:id', deleteProvider);

export default router;