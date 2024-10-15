'use client';

import React, { useEffect, useState } from 'react';
import { Table, TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, getKeyValue} from "@nextui-org/table";
import { decodeBase62 } from '../utils/b62_helper';

interface analytics {
    url_id: string,
    last_accessed: string,
    visits: number,
    key: number,
};

const AnalyticsTable = () => {

    const [data, setData] = useState<analytics[]>([]);

    useEffect(() => {
        const fetchAnalytics = async () => {
            const urls: string[] = JSON.parse(localStorage.getItem("pico") || "");
            const decoded_ids = urls.map((url) => {
                const fmt_url = new URL(url);
                const hash = fmt_url.pathname.substring(1);
                return decodeBase62(hash);
            });
            const query = decoded_ids.map(id => `ids=${encodeURIComponent(id.toString())}`).join('&');
            const response = await fetch(`/api/analytics?${query}`);
            const data = await response.json();
            setData(data);
        };
        fetchAnalytics();
    }, []);

    const columns = [
        {key: "url_id", label: "Pico-url"},
        {key: "total_visits", label: "Total Visits"},
        {key: "last_accessed", label: "Last Visit"},
    ];

  return (
    <div className="w-3/5 mx-auto my-8 px-2">
        <div className="flex font-light text-3xl mx-8 p-2 my-4">Analytics for your pico-urls:</div>
        <div className="flex mx-8 p-2">
            <Table removeWrapper aria-label="Analytics table">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn className='text-md' key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={data} emptyContent={"Nothing here yet. Pico-fy a link now!"}>
                    {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default AnalyticsTable