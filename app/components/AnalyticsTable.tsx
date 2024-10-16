'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table';
import { decodeBase62 } from '../utils/b62_helper';
import { Spinner } from '@nextui-org/react';

interface analytics {
  url_id: string;
  last_accessed: string;
  visits: number;
  key: number;
}

const AnalyticsTable = () => {
  const [data, setData] = useState<analytics[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const data = localStorage.getItem('pico');
      if (data) {
        const urls: string[] = JSON.parse(data);
        const decoded_ids = urls.map((url) => {
          const fmt_url = new URL(url);
          const hash = fmt_url.pathname.substring(fmt_url.pathname.lastIndexOf('/') + 1);          console.log(hash);
          return decodeBase62(hash);
        });
        const query = decoded_ids
          .map((id) => `ids=${encodeURIComponent(id.toString())}`)
          .join('&');
        const response = await fetch(`/api/analytics?${query}`);
        const analyticsData = await response.json();
        setData(analyticsData);
      }
      setLoading(false);
    };
    fetchAnalytics();
  }, []);

  const columns = [
    { key: 'encoded_url', label: 'Pico-url' },
    { key: 'total_visits', label: 'Total Visits' },
    { key: 'last_accessed', label: 'Last Visit' },
    { key: 'created_at', label: 'Created at' },
  ];

  return (
    <div className='relative z-10 mx-auto my-8 w-3/5 px-2'>
      <div className='mx-8 my-4 flex p-2 text-3xl font-light'>
        Analytics for your pico-urls:
      </div>
      <div className='mx-8 flex p-2'>
        <Table align='center' removeWrapper={true} aria-label='Analytics table'>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn className='text-md' key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            items={data}
            isLoading={loading}
            loadingContent={
              <Spinner color='default' />
            }
            emptyContent={'Nothing here yet. Pico-fy a link now!'}
          >
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AnalyticsTable;
