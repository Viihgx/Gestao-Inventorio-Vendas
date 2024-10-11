import React from 'react';

const MainContent = () => {
  return (
    <div className="flex flex-col p-8 ml-20 mt-16 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Finance Summary</h3>
          <p className="text-sm text-gray-600">Check out each column for more details</p>
          <div className="mt-4 text-3xl font-bold text-green-500">$500,580</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Unique Visitors</h3>
          <p className="text-sm text-gray-600">Overview</p>
          {/* Gráfico pode ser adicionado aqui */}
        </div>
        {/* Mais cartões podem ser adicionados aqui */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          {/* Gráfico principal */}
          <h3 className="text-lg font-semibold">Activity</h3>
          <p className="text-sm text-gray-600">Overview</p>
          {/* Implementar gráfico aqui */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Browser Activity</h3>
          <p className="text-sm text-gray-600">Check out more details</p>
          {/* Gráfico secundário */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
