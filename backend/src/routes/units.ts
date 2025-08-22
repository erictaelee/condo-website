import express, { Request, Response } from 'express';
import { Unit } from '../types/Unit';
import { mockUnits } from '../data/mockUnits';

const router = express.Router();

// GET /api/units - Get all available units
router.get('/', (req: Request, res: Response) => {
  try {
    const availableUnits = mockUnits.filter(unit => unit.available);
    
    res.json({
      success: true,
      data: availableUnits,
      total: availableUnits.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch units'
    });
  }
});

// GET /api/units/:id - Get specific unit details
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const unit = mockUnits.find(unit => unit.id === id);
    
    if (!unit) {
      // Remove the 'return' here
      res.status(404).json({
        success: false,
        error: 'Unit not found'
      });
      return; // Just return without a value
    }
    
    res.json({
      success: true,
      data: unit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch unit details'
    });
  }
});

export default router;