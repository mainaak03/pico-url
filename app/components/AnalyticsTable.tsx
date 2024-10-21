'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table';
import { Spinner } from '@nextui-org/react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';

interface analytics {
  key: number;
  url_id: string;
  original_url: string;
  description: string;
  created_at: string;
  last_accessed: string;
  visits: number;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const res_json = await response.json();
  const data: analytics[] = res_json.serializableAnalytics;
  return data;
}

const AnalyticsTable = () => {
  const { data, error, isLoading } = useSWR('/api/analytics', fetcher);

  const columns = [
    { key: 'encoded_url', label: 'Pico-url' },
    { key: 'original_url', label: 'Original URL'},
    { key: 'description', label: 'Description' },
    { key: 'total_visits', label: 'Total Visits' },
    { key: 'last_accessed', label: 'Last Visit' },
    { key: 'created_at', label: 'Created at' },
  ];

  if (isLoading) {
    return (
      <div className='w-full z-10 m-auto px-6 max-w-[1024px]'>
        <Spinner color='default' />
      </div>
    )
  }

  if (error) {
    return (
      <div className='relative z-10 mx-auto my-auto px-6 max-w-[1024px] text-danger'>
        {error}
      </div>
    )
  }

  return (
    <div className='relative h-full mb-auto z-10 mx-auto px-6 max-w-[1024px]'>
      <div className='flex text-2xl lg:text-3xl mt-4 lg:mt-10 font-light'>
        Analytics for your pico-urls:
      </div>
      <div className='my-4'>
        <Table align='center' aria-label='Analytics table'>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn className='text-md' key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            items={data}
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

export default withPageAuthRequired(AnalyticsTable);
