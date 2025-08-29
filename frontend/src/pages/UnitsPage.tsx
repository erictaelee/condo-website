import React, { useState, useEffect } from 'react';
import { Unit } from '../types/Unit';
import { unitsAPI } from '../services/api';

const UnitsPage = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const fetchedUnits = await unitsAPI.getAllUnits();
        setUnits(fetchedUnits);
      } catch (err) {
        setError('Failed to load units');
      } finally {
        setLoading(false);
      }
    };

    fetchUnits();
  }, []);

  if (loading) return <div className="loading">Loading available units...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Available Units</h1>
        <p>Find your perfect home at 740 West Fulton</p>
      </header>
      
      <div className="units-grid">
        {units.map(unit => (
          <div key={unit.id} className="unit-card">
            <div className="unit-header">
              <h3 className="unit-number">Unit {unit.unitNumber}</h3>
              <span className={unit.available ? 'available' : 'not-available'}>
                {unit.available ? 'Available' : 'Not Available'}
              </span>
            </div>
            
            <p><strong>Floor Plan:</strong> {unit.floorPlan.replace('bed', ' Bedroom').replace('studio', 'Studio')}</p>
            <p><strong>Square Footage:</strong> {unit.squareFootage.toLocaleString()} sq ft</p>
            <p><strong>Floor:</strong> {unit.floor}</p>
            <p className="rent">${unit.rent.toLocaleString()}/month</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitsPage;