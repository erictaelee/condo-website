import React, { useState, useEffect } from 'react';
import { Unit } from './types/Unit';
import { unitsAPI } from './services/api';
import './App.css';

function App() {
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

  if (loading) return <div>Loading units...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <header>
        <h1>740 W Fulton - Available Units</h1>
      </header>
      <main>
        {units.map(unit => (
          <div key={unit.id} className="unit-card">
            <h3>Unit {unit.unitNumber}</h3>
            <p>Floor Plan: {unit.floorPlan}</p>
            <p>Square Footage: {unit.squareFootage} sqft</p>
            <p>Rent: ${unit.rent.toLocaleString()}/month</p>
            <p>Floor: {unit.floor}</p>
            <p>Status: {unit.available ? 'Available' : 'Not Available'}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App;