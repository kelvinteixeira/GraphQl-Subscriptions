import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Hello } from '../pages/Hello';
import { LaziesQueries } from '../pages/LaziesQueries';
import { Mutations } from '../pages/Mutations';
import { Queries } from '../pages/Queries';
import { Subscriptions } from '../pages/Subscriptions';

export function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/mutations" element={<Mutations />} />
      <Route path="/queries" element={<Queries />} />
      <Route path="/laziesqueries" element={<LaziesQueries />} />
    </Routes>
  );
}