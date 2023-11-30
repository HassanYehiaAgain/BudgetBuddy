import React, { useState } from 'react';
import './Styles/DashboardMainContent.Module.css';
import { TbPigMoney } from 'react-icons/tb';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';
import { TransactionPopup } from './TransactionPopup';

export const MainContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [transactionType, setTransactionType] = useState('');

  const handleOpenPopupIncome = () => {
    setIsPopupOpen(true);
    setTransactionType('income');
  };

  const handleOpenPopupExpense = () => {
    setIsPopupOpen(true);
    setTransactionType('expense');
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="MainContent">
      <div className="main-features">
        <div className="balance">
          <TbPigMoney />Real-Time Balance:{' '}
        </div>
        <button onClick={handleOpenPopupIncome} className="add-income">
          <GiReceiveMoney /> Add Income
        </button>
        <button onClick={handleOpenPopupExpense} className="add-expense">
          <GiPayMoney /> Add Expense
        </button>
      </div>

      {isPopupOpen && (
        <TransactionPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          type={transactionType}
        />
      )}
    </div>
  );
};

export default MainContent;
