import React from "react";
import DashboardLayout from "../layouts/DashBoardLayout";
// ant design components
import { Button, Card, message } from "antd";
import { Link } from "react-router-dom";
import Search from "antd/lib/input/Search";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Typography } from "antd";
const { Title } = Typography;

const items = [
  {
    id: 0,
    name: "Bread",
  },
  {
    id: 1,
    name: "Jam",
  },
  {
    id: 2,
    name: "Oreo",
  },
  {
    id: 3,
    name: "Atta",
  },
  {
    id: 4,
    name: "Bratannia Goodday",
  },
  {
    id: 5,
    name: "Bratannia Goodday 50gm",
  },
  {
    id: 6,
    name: "Bratannia Goodday 100gm",
  },
  {
    id: 4,
    name: "Parle G",
  },

  {
    id: 4,
    name: "Kitkat",
  },
];

const handleOnSearch = (string, cached) => {
  // onSearch returns the string searched and if
  // the values are cached. If the values are cached
  // "cached" contains the cached values, if not, returns false
  console.log(string, cached);
};

const handleOnSelect = (item) => {
  // the item selected
  console.log(item);
};

const handleOnFocus = () => {
  console.log("Focused");
};
const key = "updatable";

const openMessage = () => {
  message.loading({ content: "Adding...", key });
  setTimeout(() => {
    message.success({ content: "Added!", key, duration: 2 });
  }, 1000);
};
const Essentials = () => {
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title style={{}} level={1}>
          Expense Tracker
        </Title>
      </div>
      <Card>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Title style={{}} level={4}>
            Search product to buy
          </Title>
        </div>
        <div>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="shadow">
        <Card>
          <Button type="primary" block onClick={openMessage}>
            Add Product
          </Button>
          <br />
          <br />
          <Button type="primary" block>
            <Link to="/dashboard/essentials/list/stores">Quick Find</Link>
          </Button>
          <br />
          <br />
          <Button type="primary" block>
            <Link to="/dashboard/essentials/list">View List</Link>
          </Button>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Essentials;
