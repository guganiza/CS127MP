import React, { useState, useEffect } from 'react';
import './css/AddCharge.css';

const AddChargeKitchenScreen = () => {
  // Mock data for room IDs
  const roomIds = ['ABCD123', 'ABCD124'];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRoomIds, setFilteredRoomIds] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredIds = roomIds.filter((roomId) => roomId.includes(query));
    setFilteredRoomIds(filteredIds);
  };

  const handleRoomSelection = (roomId) => {
    setSelectedRoomId(roomId);
    setSearchQuery(roomId); // Set search query to the selected room ID
    setFilteredRoomIds([]); // Clear filtered room IDs
  };

  // Mock data for services and items
  const servicesItems = [
    { id: '001', name: 'Service A Kitchen' },
    { id: '002', name: 'Service B' },
    { id: '003', name: 'Service C' },
  ];

  const [charges, setCharges] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddCharge = () => {
    const newCharge = {
      serviceId: '', // Will be generated based on selected service
      serviceItem: '',
      quantity: 1,
      price: 0,
    };
    setCharges([...charges, newCharge]);
  };

  const handleChargeChange = (index, field, value) => {
    const updatedCharges = [...charges];
    updatedCharges[index][field] = value;

    // Update total when quantity or price changes
    if (field === 'quantity' || field === 'price') {
      const newTotal = updatedCharges.reduce((acc, charge) => acc + charge.quantity * charge.price, 0);
      setTotal(newTotal);
    }

    // Update serviceId when serviceItem changes
    if (field === 'serviceItem') {
      const selectedService = servicesItems.find((service) => service.name === value);
      updatedCharges[index].serviceId = selectedService ? selectedService.id : '';
    }

    setCharges(updatedCharges);
  };

  const handleFinishCharging = () => {
    // Add logic to handle the finishing of charging, e.g., send data to the server
    console.log('Charging finished:', charges);
    setCharges([]); // Clear charges after finishing
    setTotal(0); // Reset total
  };

  return (
    <div className="charge-screen-container">
      {/* Enter Room ID/BRN Label and Search Bar */}
      <div className="search-container">
        <label htmlFor="roomSearch">Enter Room ID/BRN:</label>
        <input
          type="text"
          id="roomSearch"
          placeholder="Room ID / BRN"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {filteredRoomIds.length > 0 && (
          <ul className="room-list">
            {filteredRoomIds.map((roomId) => (
              <li key={roomId} onClick={() => handleRoomSelection(roomId)}>
                {roomId}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Charge Table */}
      <table className="charge-table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Services/Items</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {charges.map((charge, index) => (
            <tr key={charge.serviceId}>
              <td>{charge.serviceId}</td>
              <td>
                <select
                  value={charge.serviceItem}
                  onChange={(e) => handleChargeChange(index, 'serviceItem', e.target.value)}
                >
                  <option value="">Select Service/Item</option>
                  {servicesItems.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={charge.quantity}
                  onChange={(e) => handleChargeChange(index, 'quantity', parseInt(e.target.value, 10))}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={charge.price}
                  onChange={(e) => handleChargeChange(index, 'price', parseFloat(e.target.value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="total">Total: {total}</div>

      {/* Buttons */}
      <div className="button-container">
        <button className="add-charge-button" onClick={handleAddCharge}>Add Charge</button>
        <button className="finish-charging-button" onClick={handleFinishCharging}>Finish Charging</button>
      </div>
    </div>
  );
};

export default AddChargeKitchenScreen;
