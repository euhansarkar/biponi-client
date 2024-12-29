import React from 'react';

const FreeDeliveryBanner = () => {
    return (
      <div className="bg-green-50 w-full">
        <div className="container mx-auto flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-green-100 p-1.5">
            🎁
          </div>
          <p className="text-green-700">Free delivery – on any order</p>
        </div>
      </div>
    );
};

export default FreeDeliveryBanner;