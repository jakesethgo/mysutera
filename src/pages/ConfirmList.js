import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Pagination } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
const data = [
  {
    id: '1',
    date: '18/07/2023 11:37',
    orderid: 'NEW1685/2023/3',
    code: 'NEW1685',
    location: 'Johor',
    status: 'Confirm',
  },
  {
    id: '2',
    date: '18/07/2023 11:37',
    orderid: 'NEW1685/2023/3',
    code: 'NEW1685',
    location: 'Johor',
    status: 'Confirm',
  },
  {
    id: '3',
    date: '18/07/2023 11:37',
    orderid: 'NEW1685/2023/3',
    code: 'NEW1685',
    location: 'Johor',
    status: 'Confirm',
  },
  {
    id: '4',
    date: '18/07/2023 11:37',
    orderid: 'NEW1685/2023/3',
    code: 'NEW1685',
    location: 'Johor',
    status: 'Confirm',
  },
  {
    id: '5',
    date: '18/07/2023 11:37',
    orderid: 'CANGGIH SUTERA SDN BHD (HIDAYAH CENTRE FOUNDATION)/B/2023/2',
    code: 'CANGGIH SUTERA SDN BHD (HIDAYAH CENTRE FOUNDATION)',
    location: 'MASJID TENGKU KELANA JAYA PETRA, PJ [Selangor]',
    status: 'Confirm',
  },
];
const ConfirmList = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
      width: '4%',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: '5%',
    },
    {
      title: 'Order ID',
      dataIndex: 'orderid',
      key: 'orderid',
      ...getColumnSearchProps('orderid'),
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      ...getColumnSearchProps('code'),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      ...getColumnSearchProps('location'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width:'8%',
    },

    {
      title: 'Action',
      key: 'action',
      width:'8%',
      render: () => <a>Print</a>
    },
  ];
  
  return (

      <>
      <Table 
      columns={columns} 
      dataSource={data} 
      bordered title={() => 'Confirm Order List'}
      pagination={{
        total: data.length, // Set the total number of data
        defaultPageSize: 5, // Set the default page size
        showSizeChanger: true, // Show the page size changer
        pageSizeOptions: ['5', '10', '20'], // Specify the available page size options
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`, // Display the total number of items
      }} />
      </>
  );
};
export default ConfirmList;